import { api } from '_utils/apiUtils';

export const loginService = ({ email, password }) =>
  api.post('api/v1/auth/login', { email, password });

export const googleLoginService = ({ userInfo }) =>
  api.post('api/v1/auth/google', { userInfo });

export const facebookLoginService = ({ facebookId }) =>
  api.post('api/v1/auth/facebook', { facebookId });
