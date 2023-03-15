import httpClient from 'services/http-client';
import { CreateUserPayLoad } from './user.model';

export const PREFIX_AUTH = '/authen/api/users';

const createUser = (payload: CreateUserPayLoad) => {
  return httpClient.post(`${PREFIX_AUTH}/create-user`, payload);
};

const updateUser = (payload: CreateUserPayLoad) => {
  return httpClient.put(`${PREFIX_AUTH}/update-user`, payload);
};


const UserService = {
  createUser,
  updateUser
};

export default UserService;
