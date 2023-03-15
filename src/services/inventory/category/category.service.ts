import { ResponseWithPaging } from 'core/interface/response-has-paging';
import httpClient from 'services/http-client';
import { Category } from './category.model';

export const PREFIX_INVENTORY = '/inventory/api/category';

const getCategory = () => {
  return httpClient.get<ResponseWithPaging<Category[]>>(`${PREFIX_INVENTORY}`);
};

const CategoryService = {
  getCategory,
};

export default CategoryService;
