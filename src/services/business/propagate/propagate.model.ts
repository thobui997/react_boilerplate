import { DiaChi } from 'core/interface/location';

export interface Propagate {
  Id: string;
  ConstructionId: string;
  Time: string;
  CertificateNum: string;
  TotalHour: string;
  Content: string;
  PcccCount: number;
  ManangerCount: number;
  WorkerCount: number;
  OtherCount: string;
  Location: DiaChi;
}

export interface PropagateFilterPayload {
  Name: string;
  Location: DiaChi;
  FromDate: string;
  ToDate: string;
}
