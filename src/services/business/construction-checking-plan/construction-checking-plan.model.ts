import { DiaChi } from 'core/interface/location';

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

export interface ConstructionCheckingPlanFilterPayload {
  Name: string;
  Location: DiaChi;
  FromDate: string;
  ToDate: string;
  IsOutDate: boolean;
  SearchPlanDashBoardType: number;
}
