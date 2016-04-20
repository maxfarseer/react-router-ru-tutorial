import { browserHistory } from 'react-router' //eslint-disable-line no-unused-vars

export default store => next => action => { //eslint-disable-line no-unused-vars

  if ( !action.redirect ) return next(action)

  browserHistory.push(action.redirect)
}
