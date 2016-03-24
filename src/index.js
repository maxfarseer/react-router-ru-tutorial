import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'

import { routes } from './routes'

if (module.hot) {
  module.hot.accept('./routes', () => {
    // we need to replace routes
  })
}


render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
)
