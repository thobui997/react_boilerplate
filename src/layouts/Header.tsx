import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import React from 'react';

const { Header: HeaderComponent } = Layout;

interface HeaderProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ collapsed, setCollapsed }: HeaderProps) => {
  return (
    <HeaderComponent className='site-layout-background' style={{ padding: 0, borderBottom: '1px solid #d9d9d9' }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => setCollapsed(!collapsed),
      })}
    </HeaderComponent>
  );
};

export default Header;
