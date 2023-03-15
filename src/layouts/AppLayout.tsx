import { Layout } from 'antd';
import Header from 'layouts/Header';
import SideBar from 'layouts/SideBar';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const { Sider, Content } = Layout;

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className='AppLayout'>
      <Sider className='sider' theme='light' trigger={null} collapsible collapsed={collapsed} width={260}>
        <div className='logo'>
          {collapsed ? (
            <img srcSet='/logos/bst-small-logo.png 2x' />
          ) : (
            <img srcSet='/logos/bst-logo-full.png 2x' alt='logo' />
          )}
        </div>

        <SideBar />
      </Sider>

      <Layout className='site-layout'>
        {/* header */}
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />

        {/* content */}
        <Content className='content'>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
