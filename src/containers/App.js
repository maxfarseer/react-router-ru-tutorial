import React, { Component } from 'react'
import { Link } from 'react-router'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>
          <Link to='/'>App</Link>
        </h1>
        <ul>
          <li><Link to='/admin'>Admin</Link></li>
          <li><Link to='/list'>List</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
