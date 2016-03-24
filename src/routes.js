import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import Admin from './components/Admin'
import List from './components/List'
import Release from './components/Release'
import ReleaseItem from './components/ReleaseItem'
import Home from './components/Home'
import NotFound from './components/NotFound'

export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/admin' component={Admin} />
      <Route path='/list' component={List} />
      <Route path='/:genre/' component={Release}>
        <Route path='/:genre/:name' component={ReleaseItem} />
      </Route>
    </Route>
    <Route path='*' component={NotFound} />
  </div>
)
