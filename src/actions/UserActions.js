/*eslint-disable*/
import {
  LOGIN_REQUEST,
  LOGIN_FAIL, //eslint-disable-line no-unused-vars
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from '../constants/User'

import {
  ROUTING
} from '../constants/Routing'

export function login(payload) {
  return (dispatch) => {

    dispatch({
      type: LOGIN_REQUEST
    })

    setTimeout(() => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          name: payload.name,
          isAuthenticated: true
        }
      })

      dispatch({
        type: ROUTING,
        payload: {
          method: 'replace',
          nextUrl: '/admin'
        }
      })
    },2000)
  }
}

export function logout() {
  return {
    type: LOGOUT_SUCCESS
  }
}
/*eslint-enable*/
