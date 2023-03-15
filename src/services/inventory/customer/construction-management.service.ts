import { ResponseWithPaging } from 'core/interface/response-has-paging';
import httpClient from 'services/http-client';
import { User, UserPayLoad } from './construction-management.model';

export const PREFIX_INVENTORY = '/inventory/api/constructionManagement';

const getConstructionManagement = (payLoad: UserPayLoad) => {
  return httpClient.post<ResponseWithPaging<User[]>>(`${PREFIX_INVENTORY}`, payLoad);
};

const ConstructionsManagementService = {
  getConstructionManagement,
};

export default ConstructionsManagementService;
