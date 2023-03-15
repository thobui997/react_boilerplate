import { FileNameUrl } from 'core/interface/file-url';
import { DiaChi } from 'core/interface/location';

export interface Violation {
  Id: string;
  ConstructionId: string;
  ViolatorName: string;
  Date: string;
  Content: string;
  FileNameUrl: FileNameUrl[];
  Warnning: string;
  SuspensionType: string[];
  SuspensionDate: string;
  RecoverDate: string;
  Behaviour: string[];
  Fines: string;
  HandlingMeasures: string;
  SolvingStatus: string;
  ConstructionName: string;
  Location: DiaChi;
}

export interface ViolationFilterPayload {
  Content: string;
  Location: DiaChi;
  FromDate: string;
  ToDate: string;
  ConstructionName: string;
  ConstructionId: string[];
  SuspensionType: string;
  SolvingStatus: string;
}
