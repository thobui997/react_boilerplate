import { ResponseWithPaging } from 'core/interface/response-has-paging';
import httpClient from 'services/http-client';
import { ErrorInfo } from './error-management.model';

export const PREFIX_FACT = '/fact/api/error-info';

const searchByCode = (payload: string) => {
  return httpClient.get<ResponseWithPaging<ErrorInfo[]>>(`${PREFIX_FACT}/search-by-code?code=${payload}`);
};

const ErrorManagementService = {
  searchByCode,
};

export default ErrorManagementService;
