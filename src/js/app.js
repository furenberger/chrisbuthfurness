import React, { Component } from 'react';
import { render } from 'react-dom';

import '../less/style.less';
// import mrSparkleImage from '../assets/mrSparkle.jpeg'; 

export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello from react!
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));