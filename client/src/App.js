import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import SignUp from './components/signup';
import SignIn from './components/signin';
import Jokes from './components/jokes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Wanna See Some Jokes?</h1>
        </header>
        
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/jokes" component={Jokes} />
      </div>
    );
  }
}

export default App;
