import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Speaker from './Speaker'

class App extends Component {
  state = {
    message: 'nothing to say'
  
  }

  speak = () => {
    this.setState({ message: 'Youre not mocking me'})
  }

  render() {
    return (
      <div className="App">
  message: 'nthing to say'
    <Speaker message={this.state.message} speak={this.speak}/>
      </div>
    );

  
  }
}

export default App;
