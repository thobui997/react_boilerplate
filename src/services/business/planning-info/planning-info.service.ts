import { ResponseWithPaging } from 'core/interface/response-has-paging';
import httpClient from 'services/http-client';
import { PlanningInfo, PlanningInfoFilterPayload } from './planning-info.model';

export const PREFIX_BUSINESS = '/business/api/planningInfo';

const getPlanningInfoList = (payload: PlanningInfoFilterPayload) => {
  return httpClient.post<ResponseWithPaging<PlanningInfo[]>>(`${PREFIX_BUSINESS}/SearchData`, payload);
};

const PlanningService = {
  getPlanningInfoList,
};

export default PlanningService;
