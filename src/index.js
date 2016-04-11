import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'

import { routes } from './routes'

if (module.hot) {
  module.hot.accept('./routes', () => {
    // won't work... need solution to replacing routes...
    const nextRoutes = require('./routes')
    Router.createRoutes(nextRoutes)
  })
}


render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
)
