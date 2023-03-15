import { ResponseWithPaging } from 'core/interface/response-has-paging';
import httpClient from 'services/http-client';
import { ReportFact, ReportFactPayLoad } from './report-fact.model';

export const PREFIX_FACT = '/fact/api/Report-Pact';

const searchReportPact = (payload: ReportFactPayLoad) => {
  return httpClient.post<ResponseWithPaging<ReportFact[]>>(`${PREFIX_FACT}/search`, payload);
};

const ReportFactService = {
  searchReportPact,
};

export default ReportFactService;
