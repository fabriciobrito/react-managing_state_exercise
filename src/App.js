import React, { Component } from 'react';
import logo from './logo.svg';
import Score from './Score.js';
import Question from './Question.js';
import './App.css';

class App extends Component {
  state = {
    numQuestions: 0,
    numCorrect: 0,
  }
  result = correct => {
    this.setState(currState => ({
      numQuestions: ++currState.numQuestions,
      numCorrect: (correct? ++currState.numCorrect : currState.numCorrect)
    }));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <Question result={this.result} />
          <Score correct={this.state.numCorrect} question={this.state.numQuestions}/>
        </div>
      </div>
    );
  }
}

export default App;
