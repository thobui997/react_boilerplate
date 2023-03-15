import httpClient from 'services/http-client';
import { CreateRolePayLoad, Role, RoleFilterPayLoad, UpdateRolePayLoad } from './role.model';

export const PREFIX_AUTH = '/authen/api/role';

const getRoles = (payload: RoleFilterPayLoad) => {
  return httpClient.post<Role[]>(`${PREFIX_AUTH}/search`, payload);
};

const getRoleById = (id: string) => {
  return httpClient.get<Role>(`${PREFIX_AUTH}/id/${id}`);
};

const createRole = (payload: CreateRolePayLoad) => {
  return httpClient.post<Role[]>(`${PREFIX_AUTH}/create-role`, payload);
};

const updateRole = (payload: UpdateRolePayLoad) => {
  return httpClient.put<Role[]>(`${PREFIX_AUTH}/update-role`, payload);
};

const deleteRole = (id: string) => {
  return httpClient.delete<Role[]>(`${PREFIX_AUTH}?id=${id}`);
};

const RoleService = {
  getRoles,
  getRoleById,
  createRole,
  updateRole,
  deleteRole,
};

export default RoleService;
