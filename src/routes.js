import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import Admin from './components/Admin'
import Genre from './components/Genre'
import Release from './components/Release'
import ReleaseItem from './components/ReleaseItem'
import Home from './components/Home'
import NotFound from './components/NotFound'

export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/admin' component={Admin} />
      <Route path='/genre' component={Genre}>
        <Route path='/genre/release' component={Release}>
          <Route path='/genre/release/:name' component={ReleaseItem} />
        </Route>
      </Route>
    </Route>
    <Route path='*' component={NotFound} />
  </div>
)
