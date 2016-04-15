import { browserHistory } from 'react-router'

export default store => next => action => { //eslint-disable-line no-unused-vars
  const meta = action.meta
  if ( meta && meta.redirect ) {
    browserHistory.push(meta.redirect)
  } else {
    return next(action)
  }

}
