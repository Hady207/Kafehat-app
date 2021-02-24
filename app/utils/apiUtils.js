import { create } from 'apisauce';
import { Config } from '_config';
import { storageRead, storageWrite } from './storageUtils';

export const api = create({
  // baseURL: Config.API_DEV_URL,
  baseURL: Config.API_MICRO_DEV_URL,
});

// // Add a request interceptor
api.axiosInstance.interceptors.request.use(
  async (config) => {
    // Do something before request is sent
    const accessToken = await storageRead('accessToken');
    if (accessToken) {
      // eslint-disable-next-line no-param-reassign
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  },
);

// // Add a response interceptor
api.axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = await storageRead('refreshToken');
      const response = await api.post('api/v1/auth/login', { refreshToken });

      if (response.ok) {
        await storageWrite('accessToken', response.data.accessToken);

        return api.axiosInstance(originalRequest);
      }
    }

    return Promise.reject(error);
  },
);
