import React, { Component } from 'react';
import './style.scss';

export default class Home extends Component {
  render() {
    return (
      <div className='home-header'>
        <div className='home-header-center'>
          <h1 className='title'>rad.io</h1>
          <p>synchronised music sharing</p>
          <div className='actions'>
            <a className="button" href='#/auth'>Enter</a>
          </div>
        </div>
      </div>
    );
  }
}
