/* eslint-disable */

import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
//import redirect from '../middlewares/redirect'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import { rootReducer } from '../reducers'

export default function configureStore() {
  /*const store = compose(
    applyMiddleware(thunkMiddleware),
    applyMiddleware(createLogger())
  )(createStore)(rootReducer)*/

  const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware),
    applyMiddleware(createLogger()),
    applyMiddleware(routerMiddleware(browserHistory))
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').rootReducer
      store.replaceReducer(nextRootReducer)
    });
  }

  return store
}

/* eslint-enable */
