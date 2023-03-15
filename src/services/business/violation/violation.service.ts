import { ResponseWithPaging } from 'core/interface/response-has-paging';
import httpClient from 'services/http-client';
import { Violation, ViolationFilterPayload } from './violation.model';

export const PREFIX_BUSINESS = '/business/api/violation';

const getViolationList = (payload: ViolationFilterPayload) => {
  return httpClient.post<ResponseWithPaging<Violation[]>>(`${PREFIX_BUSINESS}/search`, payload);
};

const ViolationService = {
  getViolationList,
};

export default ViolationService;
