import { ReloadOutlined } from '@ant-design/icons';
import { useQueryClient } from '@tanstack/react-query';
import { Button } from 'antd';

interface RefreshButtonProps {
  queryKey: string;
  className?: string;
}
const RefreshButton = ({ className, queryKey }: RefreshButtonProps) => {
  const queryClient = useQueryClient();
  return (
    <Button
      className={className}
      type='default'
      icon={<ReloadOutlined />}
      title='Làm mới trang'
      onClick={() => queryClient.invalidateQueries({ queryKey: [queryKey] })}
    />
  );
};

export default RefreshButton;
