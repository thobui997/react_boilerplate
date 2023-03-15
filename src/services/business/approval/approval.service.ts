import { ResponseWithPaging } from 'core/interface/response-has-paging';
import httpClient from 'services/http-client';
import { Approval, ApprovalFilterPayload } from './approval.model';

export const PREFIX_BUSINESS = '/business/api/approval';

const getApprovalList = (payload: ApprovalFilterPayload) => {
  return httpClient.post<ResponseWithPaging<Approval[]>>(`${PREFIX_BUSINESS}/SearchData`, payload);
};

const ApprovalService = {
  getApprovalList,
};

export default ApprovalService;
