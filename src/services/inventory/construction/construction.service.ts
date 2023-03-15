import { ResponseWithPaging } from 'core/interface/response-has-paging';
import httpClient from 'services/http-client';
import { Construction, ConstructionPayLoad } from './construction.model';

export const PREFIX_INVENTORY = '/inventory/api/category';

const constructions = (payload: ConstructionPayLoad) => {
  return httpClient.post<ResponseWithPaging<Construction[]>>(`${PREFIX_INVENTORY}`, payload);
};

const ConstructionsService = {
  constructions,
};

export default ConstructionsService;
