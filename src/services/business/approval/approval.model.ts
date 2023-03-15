import { FileNameUrl } from 'core/interface/file-url';
import { DiaChi } from 'core/interface/location';

export interface Approval {
  Id: string;
  ConstructionId: string;
  Date: string;
  Name: string;
  DocumentNumber: string;
  OrganName: string;
  Note: string;
  FileNameUrl: FileNameUrl[];
  SolvingStatus: string;
  Location: DiaChi;
}

export type ApprovalFilterPayload = Pick<Approval, 'Name' | 'Location' | 'SolvingStatus' | 'ConstructionId'> & {
  FromDate: string;
  ToDate: string;
};
