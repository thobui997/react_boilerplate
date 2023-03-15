import { Table } from 'antd';
import { PagingOption } from 'core/constants/paging-option';
import { Paging } from 'core/interface/paging';
import { t } from 'i18next';
import React from 'react';
import type { ColumnsType } from 'antd/es/table';

interface TableComponentProps {
  columns: ColumnsType<any>;
  dataSource: any;
  paging: Paging;
  totalItems: number;
  setPaging: React.Dispatch<React.SetStateAction<Paging>>;
}

const TableComponent = (props: TableComponentProps) => {
  const { paging, dataSource, totalItems, columns, setPaging } = props;
  return (
    <Table
      bordered
      className='mt12'
      size='small'
      locale={{ emptyText: t('label.emptyData') }}
      rowKey={(record) => record.Id}
      columns={columns.map((column) => ({ ...column, align: 'center', ellipsis: true }))}
      scroll={{ y: 800 }}
      pagination={{
        size: 'default',
        position: ['bottomCenter'],
        defaultPageSize: paging.pageSize,
        showSizeChanger: true,
        onChange: (page, pageSize) => setPaging({ currentPage: page, pageSize: pageSize }),
        total: totalItems,
        current: paging.currentPage,
        pageSizeOptions: PagingOption.PAGE_SIZE_OPTION,
      }}
      rowClassName={(_, index) => (index % 2 === 0 ? '' : 'table-row-bg')}
      dataSource={dataSource ?? []}
    />
  );
};

export default TableComponent;
