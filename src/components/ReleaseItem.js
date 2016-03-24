import React, { Component } from 'react'

export default class ReleaseItem extends Component {
  render() {
    return (
      <div className='col-md-12'>
        <h3>{this.props.params.genre}</h3>
        Динамическая часть адреса - {this.props.params.name}
      </div>
    )
  }
}
