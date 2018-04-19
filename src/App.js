import React, { Component } from 'react';
import Input from './Input';
import Submit from './Submit';
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
        <br/>
        <Submit />
      </div>
    );
  }
}

export default App;
