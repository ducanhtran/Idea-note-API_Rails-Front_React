import React, { Component } from 'react';
import './App.css';
import IdeasContainer from './components/IdeasContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Hãy trình bày ý tưởng của bạn</h1>
        <IdeasContainer />
      </div>
    );
  }
}

export default App
