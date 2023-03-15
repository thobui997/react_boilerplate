import { Button, Result } from 'antd';
import { ResultStatusType } from 'antd/lib/result';
import { useNavigate } from 'react-router-dom';

interface ResultComponentProps {
  status: ResultStatusType;
  title: string;
  subTitle: string;
}

const ResultComponent = (props: ResultComponentProps) => {
  const { status, title, subTitle } = props;
  const naigate = useNavigate();

  const pathname = status === 403 ? '/dang-nhap' : '/dashboard';

  return (
    <Result
      status={status}
      title={title}
      subTitle={subTitle}
      extra={
        <Button type='primary' onClick={() => naigate({ pathname }, { replace: true })}>
          {status === 403 ? 'Quay lại trang đăng nhập' : 'Quay lại trang chủ'}
        </Button>
      }
    />
  );
};

export default ResultComponent;
