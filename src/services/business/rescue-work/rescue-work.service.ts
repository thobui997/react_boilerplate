import { ResponseWithPaging } from 'core/interface/response-has-paging';
import httpClient from 'services/http-client';
import { RescueWork, RescueWorkFilterPayload } from './rescue-work.model';

export const PREFIX_BUSINESS = '/business/api/rescueWork';

const getRescueWorkList = (payload: RescueWorkFilterPayload) => {
  return httpClient.post<ResponseWithPaging<RescueWork[]>>(`${PREFIX_BUSINESS}/search`, payload);
};

const RescueWorkService = {
  getRescueWorkList,
};

export default RescueWorkService;
