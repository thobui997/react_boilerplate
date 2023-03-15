import { PagingOption } from 'core/constants/paging-option';
import { Paging } from 'core/interface/paging';
import { useState } from 'react';

const usePaging = () => {
  const [paging, setPaging] = useState<Paging>({
    currentPage: PagingOption.CURRENT_PAGE,
    pageSize: PagingOption.PAGE_SIZE,
  });

  return { paging, setPaging };
};

export default usePaging;
