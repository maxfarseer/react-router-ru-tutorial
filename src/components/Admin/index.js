/*eslint-disable */
import React, { Component } from 'react'
import {
  POPUP_SHOW
} from '../../constants/Popup'

export default class Admin extends Component {
  static onEnter(store, nextState, replace) {
    const user = store.getState().user
    console.log(user)
    if (!user.name) {
      store.dispatch({
        type: POPUP_SHOW
      })
      replace('/')
    } else {
      if (user.name !== 'admin') {
        replace('/')
      }
    }

  }
  render() {
    return (
      <div className='row'>
        <div className='col-md-12'>Раздел /admin</div>
      </div>
    )
  }
}

/*eslint-enable */
