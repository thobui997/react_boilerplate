import { DiaChi } from 'core/interface/location';

export interface RescueWork {
  Id: string;
  Name: string;
  ReporterName: string;
  PhoneNumberReporter: string;
  ReportDate: string;
  Longitude: number;
  Latitude: number;
  LocationDetail: string;
  LocationType: string;
  RescueWorkLocation: string;
  Distance: number;
  StartTime: string;
  EndTime: string;
  Reason: string;
  SavedCount: number;
  DeadCount: number;
  SelfEscapeCount: number;
  MoneyLoss: number;
  OtherDamage: string;
  CBCSCount: number;
  Summary: string;
  MonthOfYear: string;
  Count: string;
  Status: number;
  Location: DiaChi;
}

export interface RescueWorkFilterPayload {
  Name: string;
  Location: DiaChi;
  FromDate: string;
  ToDate: string;
}
