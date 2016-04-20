import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Popup from '../../components/Popup'
import * as PopupActions from '../../actions/PopupActions'
import * as UserActions from '../../actions/UserActions'


export class PopupPage extends Component {
  handleCloseClick() {
    this.props.popupActions.hide()
  }
  handleLoginClick(user) {
    this.props.userActions.login(user)
    this.props.popupActions.hide()
  }
  render() {
    return <Popup isOpen={this.props.popup.isOpen}
                  onCloseClick={::this.handleCloseClick}
                  onLoginClick={::this.handleLoginClick} />
  }
}

function mapStateToProps(state) {
  return {
    popup: state.popup
  };
}

function mapDispatchToProps(dispatch) {
  return {
    popupActions: bindActionCreators(PopupActions, dispatch),
    userActions: bindActionCreators(UserActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PopupPage)
