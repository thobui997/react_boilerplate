import { ResponseWithPaging } from 'core/interface/response-has-paging';
import httpClient from 'services/http-client';
import { DutySchedule, DutyScheduleFilterPayload } from './duty-schedule.model';

export const PREFIX_BUSINESS = '/business/api/dutySchedule';

const getDutyScheduleList = (payload: DutyScheduleFilterPayload) => {
  return httpClient.post<ResponseWithPaging<DutySchedule[]>>(`${PREFIX_BUSINESS}/search`, payload);
};

const DutyScheduleService = {
  getDutyScheduleList,
};

export default DutyScheduleService;
