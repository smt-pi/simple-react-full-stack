import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';

export default class App extends Component {
  state = { text: null };

  componentDidMount() {
    fetch('/test')
      .then(res => res.json())
      .then(data => this.setState(data));
  }

  render() {
    const { text } = this.state;
    return (
      <div>
        {text ? <h1>Server says: {text}</h1> : <h1>Loading.. please wait!</h1>}
        <img src={ReactImage} alt="react" />
      </div>
    );
  }
}
