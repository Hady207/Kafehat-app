import { api } from '_utils/apiUtils';

export const loginService = ({ email, password }) =>
  api.post('api/v1/auth/login', { email, password });
