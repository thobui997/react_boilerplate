import { ResponseWithPaging } from 'core/interface/response-has-paging';
import httpClient from 'services/http-client';
import { ConstructionCheckingPlan, ConstructionCheckingPlanFilterPayload } from './construction-checking-plan.model';

export const PREFIX_BUSINESS = '/business/api/constructionCheckingPlan';

const getConstructionCheckingPlanList = (payload: ConstructionCheckingPlanFilterPayload) => {
  return httpClient.post<ResponseWithPaging<ConstructionCheckingPlan[]>>(`${PREFIX_BUSINESS}/SearchData`, payload);
};

const ConstructionCheckingPlanService = {
  getConstructionCheckingPlanList,
};

export default ConstructionCheckingPlanService;
