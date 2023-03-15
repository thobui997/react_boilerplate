import { DiaChi } from 'core/interface/location';

export interface UserPayLoad {
  Id: string;
  Name: string;
  ParentId: string;
  Address: string;
  TaxCode: string;
  Info: string;
  PhoneNumber: string;
  CustomerType: string;
  IsActive: string;
  IsParent: boolean;
  IsCurrentCustomer: boolean;
}

export interface User {
  Id: string;
  Name: string;
  ParentId: string;
  Address: string;
  TaxCode: string;
  Info: string;
  CreatedDate: string;
  PhoneNumber: string;
  Note: string;
  IsActive: string;
  CustomerType: string;
  Children: string[];
  Locations: DiaChi[];
  Longitude: string;
  Latitude: string;
  Location: DiaChi;
  LocationDetail: string;
}
