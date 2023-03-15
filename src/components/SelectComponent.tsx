import { Select } from 'antd';
import { handleFilter } from 'utils';

interface SelectComponentProps {
  bordered?: boolean;
  value?: any;
  dataSources: any;
  placeholder: string;
  classSelect?: string;
  isDisable?: boolean;
  mode?: 'multiple' | 'tags' | undefined;
  optionFilterProp?: string;
  onChange?: (
    value: any,
    option:
      | {
          label: string;
          disabled?: boolean;
          value: any;
        }
      | {
          label: string;
          disabled?: boolean;
          value: any;
        }[],
  ) => void;
  style?: React.CSSProperties;
}

const SelectComponent = (props: SelectComponentProps) => {
  const { placeholder, dataSources, onChange, mode, classSelect, isDisable, style, optionFilterProp, bordered } = props;

  return (
    <Select
      bordered={bordered}
      optionFilterProp={optionFilterProp}
      className={classSelect}
      placeholder={placeholder}
      options={dataSources}
      disabled={isDisable}
      value={props.value}
      onChange={onChange}
      mode={mode}
      maxTagCount={5}
      allowClear
      showSearch
      filterOption={handleFilter}
      filterSort={(firstOptions, secondOption) => firstOptions.label.localeCompare(secondOption.label)}
      style={style}
    />
  );
};

export default SelectComponent;
