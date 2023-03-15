export interface ReportFactPayLoad {
  DeviceType: string;
  FromDate: string;
  ToDate: string;
}

export interface ReportFact {
  ReportFact: [];
  ChartDataPass: [];
  ChartDataNotPass: [];
}
