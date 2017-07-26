import React from 'react'
import { Layout, Menu, Affix } from 'antd'
import scrollToComponent from 'react-scroll-to-component'

import './App.css'
import Introduction from './Introduction'
import Projects from './Projects'

const { Header, Footer, Content } = Layout

const App = () => (
  <div className="App" ref={(section) => { this.pagetop = section }}>
    <Layout className="App-layout">
      <Affix>
        <Header>
          { /* <img src={logo} className="App-logo" alt="logo" /> */ }
          <Menu
            theme="dark"
            mode="horizontal"
            selectable={false}
            className="App-nav-menu"
            onClick={(item) => {
              switch (item.key) {
                case '1':
                  scrollToComponent(this.pagetop, { align: 'top' })
                  break
                case '2':
                  scrollToComponent(this.portfolio, { align: 'top' })
                  break
                default:
              }
            }}
          >
            <Menu.Item key={1}>Top</Menu.Item>
            <Menu.Item key={2}>Portfolio</Menu.Item>
            <Menu.Item key={3}>Contact</Menu.Item>
          </Menu>
        </Header>
      </Affix>
      <Content className="App-content">
        <div className="App-title-divider" />
        <Introduction />
        <div className="App-title-divider" ref={(section) => { this.portfolio = section }} />
        <Projects />
      </Content>
      <Footer>
        2017 Paul Hoskinson
      </Footer>
    </Layout>
  </div>
)

export default App
