import { ResponseWithPaging } from 'core/interface/response-has-paging';
import httpClient from 'services/http-client';
import { ConstructionChecking, ConstructionCheckingFilterPayload } from './construction-checking.model';

export const PREFIX_BUSINESS = '/business/api/constructionChecking';

const getConstructionCheckingList = (payload: ConstructionCheckingFilterPayload) => {
  return httpClient.post<ResponseWithPaging<ConstructionChecking[]>>(`${PREFIX_BUSINESS}/search`, payload);
};

const ConstructionCheckingService = {
  getConstructionCheckingList,
};

export default ConstructionCheckingService;
