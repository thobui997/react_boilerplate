import { SearchOutlined } from '@ant-design/icons';
import { Input, InputRef } from 'antd';
import type { ColumnType } from 'antd/es/table';
import type { FilterValue } from 'antd/es/table/interface';
import { DatePicker, SelectComponent } from 'components';
import { Time } from 'core/constants/time';
import dayjs from 'dayjs';
import { useMemo, useRef, useState } from 'react';

const useColumnFilterTable = () => {
  const searchInput = useRef<InputRef>(null);
  const [filterResult, setFilterResult] = useState<any>({});
  const [filteredInfo, setFilteredInfo] = useState<Record<string, FilterValue | null>>({});

  const handleTableChange = (_: any, filters: Record<string, FilterValue>) => {
    const result: any = {};
    for (const [key, value] of Object.entries(filters)) {
      result[key] = value !== null && value.length > 0 ? value[0] : null;
    }
    setFilterResult(result);
    setFilteredInfo(filters);
  };

  const getColumnSearchProps = (key: string, placeholder: string): ColumnType<any> => ({
    filteredValue: filteredInfo[key] || null,
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input.Search
          allowClear
          ref={searchInput}
          placeholder={`Nhập ${placeholder}`}
          value={selectedKeys[0]}
          onChange={(event) => {
            setSelectedKeys(event.target.value ? [event.target.value] : []);
          }}
          onSearch={(value) => {
            setSelectedKeys(value ? [value.trim()] : []);
            confirm();
          }}
          style={{ marginBottom: 0, display: 'block' }}
        />
      </div>
    ),
    filterIcon: (filtered: boolean) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
  });

  const getColumnDropdownProps = (key: string, placeholder: string, dataSources: any = []): ColumnType<any> => ({
    filteredValue: filteredInfo[key] || null,
    filterDropdown: ({ setSelectedKeys, confirm, selectedKeys }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <SelectComponent
          placeholder={`Chọn ${placeholder}`}
          dataSources={dataSources}
          style={{ marginBottom: 0, width: 200 }}
          value={selectedKeys[0]}
          onChange={(value) => {
            setSelectedKeys(value !== undefined ? [value] : []);
            confirm();
          }}
        />
      </div>
    ),
  });

  const getColumnDateProps = (key: string): ColumnType<any> => ({
    filteredValue: filteredInfo[key] || null,
    filterDropdown: ({ setSelectedKeys, confirm, selectedKeys }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <DatePicker
          placeholder='Chọn ngày'
          style={{ marginBottom: 0, width: 200 }}
          value={selectedKeys[0] ? dayjs(selectedKeys[0]) : null}
          format={Time.DATE_FORMAT}
          onChange={(value: any) => {
            setSelectedKeys(value ? [value] : []);
            confirm();
          }}
        />
      </div>
    ),
  });

  const getColumnDateTimeProps = (key: string): ColumnType<any> => ({
    filteredValue: filteredInfo[key] || null,
    filterDropdown: ({ setSelectedKeys, confirm, selectedKeys }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <DatePicker
          placeholder='Chọn ngày'
          showTime
          style={{ marginBottom: 0, width: 200 }}
          value={selectedKeys[0] ? dayjs(selectedKeys[0]) : null}
          format={Time.DATE_TIME_FORMAT}
          onChange={(value: any) => {
            setSelectedKeys(value ? [value] : []);
            confirm();
          }}
        />
      </div>
    ),
  });

  const isFilter = useMemo(
    () => Object.values(filteredInfo).filter((item) => Boolean(item)).length > 0,
    [filteredInfo],
  );

  return {
    getColumnSearchProps,
    handleTableChange,
    filterResult,
    getColumnDropdownProps,
    getColumnDateProps,
    getColumnDateTimeProps,
    isFilter,
  };
};

export default useColumnFilterTable;
