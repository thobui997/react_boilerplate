import { LockOutlined, ReloadOutlined, UserOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, Col, Divider, Form, Input, Row } from 'antd';
import { setCredentials } from 'app/auth/auth.slice';
import { useAppDispatch } from 'app/hooks';
import { useLocalStorage, useSetDocumentTitle, useShowNotification } from 'hooks';
import { useRef, useState } from 'react';
import Captcha from 'react-captcha-code';
import { Link, useNavigate } from 'react-router-dom';
import { AuthService } from 'services';
import { LoginPayload } from 'services/authen/auth/auth.model';

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [refreshToken, setRefreshToken] = useLocalStorage('refreshToken', '');
  const { handleError } = useShowNotification();

  const captchaRef = useRef<any>();
  const [captcha, setCaptcha] = useState('');

  const loginMutation = useMutation({
    mutationFn: (payload: LoginPayload) => AuthService.login(payload),
  });

  const handleFinish = ({ UserName, Password }: LoginPayload) => {
    loginMutation
      .mutateAsync({ UserName, Password })
      .then((res) => {
        const { AccessToken, RefreshToken } = res.data;
        dispatch(setCredentials({ token: AccessToken }));
        setRefreshToken(RefreshToken);
        // const permissions = (jwtDecode(AccessToken) as any).Permission;
        // const pathname = getPathName(JSON.parse(permissions));
        navigate({ pathname: '/dashboard' }, { replace: true });
      })
      .catch((error) => {
        const message = error?.response?.data;
        handleError(typeof message === 'string' ? message : 'Đăng nhập thất bại');
        captchaRef.current.refresh();
        form.resetFields(['Captcha']);
      });
  };

  useSetDocumentTitle('Đăng nhập');

  return (
    <div className='Login'>
      <Row>
        <Col span={18}>
          <div className='image'>
            <img src='/images/login-background.png' alt='login-background' />
          </div>
        </Col>

        <Col span={6}>
          <Form className='login-form' onFinish={handleFinish} layout='vertical' form={form}>
            <img src='/logos/bst-logo-full.png' alt='bst-logo' />

            <Divider className='mb20' />

            <Form.Item
              name='UserName'
              label='Tên đăng nhập'
              rules={[
                {
                  whitespace: true,
                  required: true,
                  message: 'Tên đăng nhập không được bỏ trống',
                },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder='Nhập tên đăng nhập' />
            </Form.Item>

            <Form.Item
              label='Mật khẩu'
              name='Password'
              rules={[
                {
                  whitespace: true,
                  required: true,
                  message: 'Mật khẩu không được bỏ trống',
                },
              ]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder='Nhập passowrd' />
            </Form.Item>

            <Form.Item
              label='Mã xác thực'
              name='captcha'
              rules={[{ required: true, whitespace: true, message: 'Nhập xác thực từ hình ảnh!' }]}
            >
              <Input placeholder='Nhập mã xác thực' />
            </Form.Item>

            <div className='captcha mb16'>
              <Captcha ref={captchaRef} onChange={(value) => setCaptcha(value)} width={200} />
              <ReloadOutlined className='ml8' type='primary' onClick={() => captchaRef.current.refresh()} />
            </div>

            <Button type='primary' htmlType='submit'>
              Đăng nhập
            </Button>

            <Link className='mt4' to='/quen-mat-khau'>
              Quên mật khẩu
            </Link>

            <span className='mt20 copyright'>Một sản phẩm của công ty BASATO</span>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
