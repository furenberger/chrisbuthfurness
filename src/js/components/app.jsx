import React, { Component } from 'react';
import { render } from 'react-dom';
import Exhibitions from './exhibitions/exhibitions';

import '../../less/style.less';

// import mrSparkleImage from '../assets/mrSparkle.jpeg'; 

export default class App extends Component {
  render() {
    return (
      <Exhibitions />
    );
  }
}

render(<App />, document.getElementById('app'));