export interface ErrorInfo {
  ErrorCode: string;
  Description: string;
  PassFrom: number;
  PassTo: number;
  CreateTime: string;
  Creator: string;
  fileUpload: Upload[];
  Id: string;
}

export type ErrorInfoPayload = Omit<ErrorInfo, 'Id' | 'CreateTime' | 'Creator' | 'Id'>;

export interface Upload {
  FileUrl: string;
  FileName: string;
}
