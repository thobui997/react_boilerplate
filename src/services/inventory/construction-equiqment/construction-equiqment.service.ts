import { ResponseWithPaging } from 'core/interface/response-has-paging';
import httpClient from 'services/http-client';
import { ConstructionEquiqment } from './construction-equiqment.model';

export const PREFIX_INVENTORY = '/inventory/api/constructionEquiqment';

const getConstructionEquiqment = () => {
  return httpClient.get<ResponseWithPaging<ConstructionEquiqment[]>>(`${PREFIX_INVENTORY}`);
};

const ConstructionsEquiqmentService = {
  getConstructionEquiqment,
};

export default ConstructionsEquiqmentService;
