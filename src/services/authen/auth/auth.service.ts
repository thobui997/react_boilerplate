import httpClient from 'services/http-client';
import {
  AuthResult,
  ChangeAdminPasswordPayload,
  ChangeUserPasswordPayload,
  LoginPayload,
  RefreshTokenPayload,
  ResetPasswordByUserPayload,
} from './auth.model';

export const PREFIX_AUTH = '/authen/api/users';

const login = (payload: LoginPayload) => {
  return httpClient.post<AuthResult>(`${PREFIX_AUTH}/login`, payload);
};

const refreshToken = (payload: RefreshTokenPayload) => {
  return httpClient.post<AuthResult>(`${PREFIX_AUTH}/refresh-token`, payload);
};

const changeUserPassword = (payload: ChangeUserPasswordPayload) => {
  return httpClient.put(`${PREFIX_AUTH}/user-reset-pasword`, payload);
};

const changeAdminPassword = (payload: ChangeAdminPasswordPayload) => {
  return httpClient.put(`${PREFIX_AUTH}/admin-reset-pasword`, payload);
};

const forgotPassword = (payload: string) => {
  return httpClient.post(`${PREFIX_AUTH}/forgot-passWord`, payload);
};

const resetPassword = (payload: ResetPasswordByUserPayload) => {
  return httpClient.post(`${PREFIX_AUTH}/reset-pasword`, payload);
};



const AuthService = {
  login,
  refreshToken,
  changeUserPassword,
  forgotPassword,
  resetPassword,
  changeAdminPassword,
};

export default AuthService;
