import React from 'react'
import { Layout, Menu } from 'antd'

import './App.css'
import Introduction from './Introduction'
import Projects from './Projects'
import logo from './logo.svg'

const { Header, Footer, Content } = Layout

const App = () => (
  <div className="App">
    <Layout>
      <Header>
        <img src={logo} className="App-logo" alt="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          selectable={false}
          // defaultSelectedKeys={['1']}
          className="App-nav-menu"
        >
          <Menu.Item key="1">Top</Menu.Item>
          <Menu.Item key="2">Portfolio</Menu.Item>
          <Menu.Item key="3">Contact</Menu.Item>
        </Menu>
      </Header>
      <Content className="App-content">

        <Introduction />

        <Projects />

      </Content>
      <Footer>
        2017 Paul Hoskinson
      </Footer>
    </Layout>
  </div>
)

export default App
