import { Location } from 'core/interface/location';

export interface RoleFilterPayLoad {
  Id: string;
  RoleName: string;
  Information: string;
  Location: Location;
}

export interface Role {
  Id: string;
  RoleName: string;
  Information: string;
  CustomerId: string;
  Permissions: number[];
  Locations: Location[];
  CreateBy: string;
  RoleType: string;
}

export type CreateRolePayLoad = Omit<Role, 'Id' | 'CustomerId' | 'CreateBy' | 'RoleType'>;

export type UpdateRolePayLoad = Omit<Role, 'CustomerId' | 'CreateBy' | 'RoleType'>;
