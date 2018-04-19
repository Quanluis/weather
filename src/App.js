import React, { Component } from 'react';
import Input from './Input';
import Submit from './Submit';
import "./App.css";

const axios = require('axios');

axios.get('https://api.darksky.net/forecast/7c2d5e0d00caf2b29e7f1019936a897e/37.8267,-122.4233')
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
}); 

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
