import { ReactNode } from 'react';

interface RenderListProps<T> {
  datasource?: T[];
  render: (item: T, index?: number, datas?: T[]) => ReactNode;
  empty?: ReactNode;
}

const RenderList = <T,>(props: RenderListProps<T>): any => {
  const { datasource, render, empty } = props;
  if (datasource?.length === 0) {
    return empty;
  }
  return <>{datasource?.map((data, index, datas) => render(data, index, datas))}</>;
};

export default RenderList;
