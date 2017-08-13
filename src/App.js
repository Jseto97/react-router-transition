import { Route } from 'react-router-dom';
import React, { Component } from 'react';

import Subscribe from './pages/Subscribe'
import ThankYou from './pages/ThankYou'
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Subscribe}></Route>
        <Route path="/thanks" exact component={ThankYou}></Route>
      </div>
    );
  }
}

export default App;
