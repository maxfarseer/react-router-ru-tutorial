import { combineReducers } from 'redux'
import user from './user'
import popup from './popup'
import { routerReducer } from 'react-router-redux'

export const rootReducer = combineReducers({
  user,
  popup,
  routing: routerReducer
})
