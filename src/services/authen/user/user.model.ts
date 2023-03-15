import { ConstructionDto } from 'core/interface/contruction-dto';
import { DiaChi, Location } from 'core/interface/location';

interface UserBase {
  Id?: string;
  FullName: string;
  UserName: string;
  Email: string;
  PhoneNumber: string;
  CustomerId: string;
  RoleIds: string[];
  Permissions: number[];
  PermissionAdded: number[];
  IsActive: string;
  ConstructionId: string[];
  PcccUnitId: string;
  CustomerType: string;
  AvatarLink: string;
}

export interface User extends UserBase {
  InvalidPasswordCount: number;
  PaswordTimeReset: string;
  CustomerLockTime: string;
  RoleChangeTime: string;
  LastLoginTime: string;
  Locations: Location[];
  ConstructionDto: ConstructionDto[];
  CustomerName: string;
  RoleName: string[];
  IsLockout: string;
  TopicSubscribes: string[];
  OldTopicSubscribes: string[];
  CaseId: string;
  CasesLogin: CasesLogin[];
}

export interface CasesLogin {
  CaseId: string;
  LoginTime: string;
}

export interface CreateUserPayLoad extends UserBase {
  Locations: DiaChi[];
}

export interface UpdateUserPayLoad extends UserBase {
  Locations: DiaChi[];
  IsUpdateOther: boolean;
  CustomerLockTime: string;
  RoleChangeTime: string;
  LastLoginTime: string;
  PaswordTimeReset: string;
  TopicSubscribes: string[];
  OldTopicSubscribes: string[];
  CasesLogin: CasesLogin[];
}
