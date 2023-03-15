import { ResponseWithPaging } from 'core/interface/response-has-paging';
import httpClient from 'services/http-client';
import { ReportResultDetail } from './report-result-detail.model';

export const PREFIX_FACT = '/fact/api/report';

const getTestResultDetail = (payload: string) => {
  return httpClient.get<ResponseWithPaging<ReportResultDetail[]>>(`${PREFIX_FACT}/test-result-detail?imei=${payload}`);
};

const ReportResultDetailService = {
  getTestResultDetail,
};

export default ReportResultDetailService;
