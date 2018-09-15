import * as React from 'react';
import './App.css';
import { Name } from '@jon-abr/reactjs-ui-kit';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
          My Name is <Name salutation="Mr" firstname="Jonathan" lastname="Abrahams" />
        </p>
      </div>
    );
  }
}

export default App;
