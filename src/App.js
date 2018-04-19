import React, { Component } from 'react';
import Input from './Input';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          Weather app!
        </h1>
        <h2>Add your location!</h2>
        <Input />
      </div>
    );
  }
}

export default App;
