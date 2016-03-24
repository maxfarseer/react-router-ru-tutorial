import React, { Component } from 'react'
import { Link } from 'react-router'

export default class List extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-md-12'>
            <h3> Список жанров </h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <ul className='list'>
              <li className='list__item'>
                <Link to='/house/'>House</Link>
              </li>
              <li className='list__item'>
                <Link to='/dnb/dslfkhsdkjfhsdf'>DNB</Link>
              </li>
              <li className='list__item'>
                <Link to='/hip-hop/'>Hip-hop</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
