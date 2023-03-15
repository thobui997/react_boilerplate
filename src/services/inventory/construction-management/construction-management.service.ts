import { ResponseWithPaging } from 'core/interface/response-has-paging';
import httpClient from 'services/http-client';
import { ConstructionManagement } from './construction-management.model';

export const PREFIX_INVENTORY = '/inventory/api/constructionManagement';

const getConstructionManagement = () => {
  return httpClient.get<ResponseWithPaging<ConstructionManagement[]>>(`${PREFIX_INVENTORY}`);
};

const ConstructionsManagementService = {
  getConstructionManagement,
};

export default ConstructionsManagementService;
