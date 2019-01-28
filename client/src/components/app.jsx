import React from 'react';
import CSSModules from 'react-css-modules';
import style from './app.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {

    };
  };

  render() {
    return <h1>Hello World!</h1>
  }
};

export default CSSModules(App, style);