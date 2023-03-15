import { ResponseWithPaging } from 'core/interface/response-has-paging';
import httpClient from 'services/http-client';
import { Propagate, PropagateFilterPayload } from './propagate.model';

export const PREFIX_BUSINESS = '/business/api/propagate';

const getPropagateList = (payload: PropagateFilterPayload) => {
  return httpClient.post<ResponseWithPaging<Propagate[]>>(`${PREFIX_BUSINESS}/search`, payload);
};

const PropagateService = {
  getPropagateList,
};

export default PropagateService;
