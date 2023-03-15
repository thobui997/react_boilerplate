import { ResponseWithPaging } from 'core/interface/response-has-paging';
import httpClient from 'services/http-client';
import { DeviceTypeManagement } from './device-type-management.model';

export const PREFIX_FACT = '/fact/api/device-type';

const searchByCode = (payload: string) => {
  return httpClient.get<ResponseWithPaging<DeviceTypeManagement[]>>(`${PREFIX_FACT}/search-by-code?code=${payload}`);
};

const DeviceTypeManagementService = {
  searchByCode,
};

export default DeviceTypeManagementService;
