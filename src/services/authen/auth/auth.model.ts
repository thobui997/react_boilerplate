export interface LoginPayload {
  UserName: string;
  Password: string;
}

export interface AuthResult {
  AccessToken: string;
  ExpirationTime: number;
  RefreshToken: string;
}

export interface ResetPasswordByUserPayload extends ChangePasswordBase {
  Token: string;
}

export interface RefreshTokenPayload {
  RefreshToken: string;
  info?: string;
}

export interface ChangeUserPasswordPayload extends ChangePasswordBase {
  OldPassword: string;
}

export interface ChangeAdminPasswordPayload extends ChangePasswordBase {
  UserName: string;
}

export interface ChangePasswordBase {
  NewPassword: string;
  ReNewPassword: string;
}
