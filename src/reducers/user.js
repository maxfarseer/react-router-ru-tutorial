import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from '../constants/User'

const initialState = JSON.parse(window.localStorage.getItem('rr_user')) || {}

export default function userstate(state = initialState, action) {

  switch (action.type) {

    case LOGIN_REQUEST:
      // TODO
      return state

    case LOGIN_SUCCESS:

      return {...state, name: action.payload }

    case LOGIN_FAIL:
      // TODO
      return state

    case LOGOUT_SUCCESS:
      // TODO
      return state

    default:
      return state
    }
}
