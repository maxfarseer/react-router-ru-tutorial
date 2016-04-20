import {
  POPUP_SHOW,
  POPUP_HIDE
} from '../constants/Popup'

const initialState = {
  isOpen: false
}

export default function popupstate(state = initialState, action) {

  switch (action.type) {
  case POPUP_SHOW:
    return { ...state, isOpen: true }

  case POPUP_HIDE:
    return { ...state, isOpen: false }

  default:
    return state
  }
}
