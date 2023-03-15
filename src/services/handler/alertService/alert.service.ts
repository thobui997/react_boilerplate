import { ResponseWithPaging } from 'core/interface/response-has-paging';
import httpClient from 'services/http-client';
import { Alert } from './alert.model';

export const PREFIX_FACT = '/fact/api/device-type';

const findById = (payload: string) => {
  return httpClient.get<ResponseWithPaging<Alert[]>>(`${PREFIX_FACT}/id/${payload}`);
};

const AlertService = {
  findById,
};

export default AlertService;
