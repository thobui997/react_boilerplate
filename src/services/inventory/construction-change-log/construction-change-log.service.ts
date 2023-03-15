import { ResponseWithPaging } from 'core/interface/response-has-paging';
import httpClient from 'services/http-client';

export const PREFIX_INVENTORY = '/inventory/api/ConstructionChangeLog';

const getConstructionChangeLog = () => {
  return httpClient.get<ResponseWithPaging<[]>>(`${PREFIX_INVENTORY}`);
};

const ConstructionsChangeLogService = {
  getConstructionChangeLog,
};

export default ConstructionsChangeLogService;
