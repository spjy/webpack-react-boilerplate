import React, { Component } from 'react';
import image from '../../public/images/Bunny.png';
import '../index.scss';

class component extends Component {
  render() {
    return (
      <div>
        <div className="grey bg">
          <span className="text">hi this is a bunny</span>
        </div>
        <img src={image} /><br/>
      </div>
    );
  }
}

export default component;