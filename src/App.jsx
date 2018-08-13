import React from 'react'
import { Layout, Menu } from 'antd'
import scrollToComponent from 'react-scroll-to-component'

import './App.css'
import SectionHeader from './SectionHeader'
import Introduction from './Introduction'
import WBI from './WBI'
import Projects from './Projects'
import Contact from './Contact'

const { Header, Footer, Content } = Layout
const scrollOptions = { align: 'top', duration: '500' }

const App = () => (
  <div className="App" ref={(section) => { this.pagetop = section }}>
    <Layout className="App-layout">

      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          selectable={false}
          className="App-nav-menu"
          onClick={(item) => {
            switch (item.key) {
              case '1':
                scrollToComponent(this.pagetop, scrollOptions)
                break
              case '2':
                scrollToComponent(this.wbi, scrollOptions)
                break
              case '3':
                scrollToComponent(this.portfolio, scrollOptions)
                break
              case '4':
                scrollToComponent(this.contact, scrollOptions)
                break
              default:
            }
          }}
        >
          <Menu.Item key={1}>
            <a href="https://paulhoskinson.surge.sh">
              <span className="App-home App-home1">p</span>
              <span className="App-home App-home2">h</span>
            </a>
          </Menu.Item>
          <Menu.Item key={2}>Showcase Project</Menu.Item>
          <Menu.Item key={3}>Portfolio</Menu.Item>
          <Menu.Item key={4}>Contact</Menu.Item>
        </Menu>
      </Header>

      <Content className="App-content">
        <div className="App-title-divider" />
        <Introduction />
        <div className="App-title-divider" ref={(section) => { this.wbi = section }} />
        <SectionHeader
          text="Showcase Project"
          color="#b2dbd5"
          handleClickTop={() => scrollToComponent(this.pagetop, scrollOptions)}
        />
        <WBI />
        <div className="App-title-divider" ref={(section) => { this.portfolio = section }} />
        <SectionHeader
          text="Portfolio"
          color="#b2dbd5"
          handleClickTop={() => scrollToComponent(this.pagetop, scrollOptions)}
        />
        <Projects />
        <div className="App-title-divider" ref={(section) => { this.contact = section }} />
        <SectionHeader
          text="Contact"
          color="#fe7a47"
          handleClickTop={() => scrollToComponent(this.pagetop, scrollOptions)}
        />
        <Contact />
      </Content>

      <Footer className="App-footer">
        Site created in 2017 by Paul Hoskinson &nbsp;&nbsp;
        <a href="https://github.com/plhosk/portfolio">GitHub</a>
      </Footer>

    </Layout>
  </div>
)

export default App
