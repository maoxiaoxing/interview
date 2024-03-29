import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { 
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons'
import routes, { MxxRouter } from '../../router/routes'
import { Route, Routes, useNavigate } from 'react-router-dom'
import style from './style.module.css'

const { Header, Sider, Content } = Layout
const { SubMenu } = Menu

const MxxLayout = () => {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()

  const toggle = (route: any) => {
    setCollapsed(!collapsed)
  }

  const toPage = (route: MxxRouter) => {
    navigate(route.path)
  }

  const renderMenu = (routes: MxxRouter[]) => {
    return routes.map((route: MxxRouter, index: number) => {
      return (
        <React.Fragment key={route.path + index}>
          {
            route.children ? 
            <SubMenu key={route.path} title={route.title}>
              {
                renderMenu(route.children)
              }
            </SubMenu> :
            <Menu.Item key={route.path} onClick={() => toPage(route)}>
              {route.title}
            </Menu.Item>
          }
        </React.Fragment>
      )
    })
  }

  const RouterView = (routes: MxxRouter[]): any => {
    return routes.map((item: any) => {
      if (item.children) {
        return RouterView(item.children)
      } else {
        return <Route key={item.path} path={item.path} element={<item.component />}></Route>
      }
    })
  }

  return (
    <Layout>
      <Sider trigger={null} collapsed={collapsed} collapsible>
        <div className={'logo'} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          { renderMenu(routes) }
        </Menu>
      </Sider>
      <Layout className={style.myLayout}>
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {
            React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })
          }
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {
            <Routes>
              {/* <RouterView routes={routes} /> */}
              {RouterView(routes)}
            </Routes>
          }
        </Content>
      </Layout>
    </Layout>
  )
}

export default MxxLayout
