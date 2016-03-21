import React, { Component } from 'react'

export default class Release extends Component {
  render() {
    return (
      <div>
        <div className='col-md-12'>Раздел /genre/release</div>
        {this.props.children}
      </div>
    )
  }
}
