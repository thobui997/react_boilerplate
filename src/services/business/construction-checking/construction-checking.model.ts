import { DiaChi } from 'core/interface/location';

export interface ConstructionChecking {
  Id: string;
  Name: string;
  Type: string;
  ConstructionId: string;
  ConstructionName: string;
  LocationDetail: string;
  CheckDate: string;
  Evaluate: string;
  Content: string;
  ContentDetail: string;
  Checker: string[];
  CheckerId: string;
  CheckerName: string;
  CheckerListName: string;
  SolvingStatus: string;
  ConstructionCheckingPlan: ConstructionCheckingPlan;
  ConstructionCheckingPlanId: string;
  FileNameUrl: string[];
  FileNameImageUrl: string;
  CheckingStatus: string;
  CheckingResult: string;
  FileReportUrl: string;
  Note: string;
  IsOutDate: boolean;
  FinishCheckDate: string;
  ConstructionEmail: string;
  FileLinkSendEmail: string;
  DateType: number;
}

export interface ConstructionCheckingPlan {
  Id: string;
  Name: string;
  Location: DiaChi;
  Target: string;
  RequireResult: string;
  Determination: string;
  ObjectCheck: string;
  Checkers: string[];
  ContructionCheckings: string;
  FromDate: string;
  ToDate: string;
  Description: string;
  FileReportUrl: string;
  FileNameUrl: string[];
  FileNameImageUrl: string;
  Address: string;
  Code: string;
  Content: string;
  ApproverId: string;
  FinishPercent: string;
  ContructionCheckingLst: string;
  IsOutDate: string;
  CheckingStatus: string;
  CheckerCount: string;
  ContructionCheckingCount: string;
}

export interface ConstructionCheckingFilterPayload {
  ConstructionName: string;
  Location: DiaChi;
  FromDate: string;
  ToDate: string;
  ConstructionCheckingPlanId: string;
  CheckingStatus: string;
  ConstructionId: string[];
  Ids: string[];
  ConstructionCheckingPlanListIds: string[];
}
