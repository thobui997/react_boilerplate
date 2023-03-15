export interface ReportResultDetail {
  GsmIMEI: string
  IsPass: boolean
  MacJIG: string
  DateTest: string
  CountPass: string
  ErrorDetails: ErrorDetail[]
}

export interface ErrorDetail {
  ErrorCode: string
  DateTest: string
  TestResult: boolean
}