import React from 'react'
import Headers from './Header'
import { Layout, Menu } from "antd"
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';
import { RoutesPanel } from '../Routes';

export default function Navbar() {
  const { Content, Sider } = Layout

  return (
    <React.Fragment>
      <Headers />
      <Layout style={{ height: '100vh' }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              <Link to='/users'>Users</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<VideoCameraOutlined />}>
              <Link to='/comments'>Comments</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<UploadOutlined />}>
              <Link to='/posts'>Posts</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<UserOutlined />}>
              <Link to='/todos'>Todos</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <RoutesPanel />
            </div>
          </Content>
        </Layout>
      </Layout>
    </React.Fragment>
  )
}
