/* eslint-disable react/jsx-filename-extension */
// import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'
// import registerServiceWorker from './registerServiceWorker'

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => { render(App) })
}

// eslint-disable-next-line react/jsx-filename-extension
// ReactDOM.render(<App />, document.getElementById('root'))
// registerServiceWorker()
