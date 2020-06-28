import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numQuestions: 0,
      numCorrect: 0,
      value1: Math.floor(Math.random() * 100),
      value2: Math.floor(Math.random() * 100),
      value3: Math.floor(Math.random() * 100)
    }
    this.state.proposedAnswer = Math.floor(Math.random() * 3) + this.state.value1 + this.state.value2 + this.state.value3;
  }
  checkAnswerAndReset(playerAnswer){
    let correctAnswer = this.state.value1 + this.state.value2 + this.state.value3 === this.state.proposedAnswer;
    const v1 = Math.floor(Math.random() * 100), v2 = Math.floor(Math.random() * 100), v3 = Math.floor(Math.random() * 100);
    this.setState((prevState) => { 
      return{
        value1: v1,
        value2: v2,
        value3: v3,
        proposedAnswer: Math.floor(Math.random() * 3) + v1 + v2 + v3,
        numCorrect: ((playerAnswer === correctAnswer)? prevState.numCorrect + 1 : prevState.numCorrect),
        numQuestions: prevState.numQuestions + 1        
      }
    });
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
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={() => this.checkAnswerAndReset(true)}>True</button>
          <button onClick={() => this.checkAnswerAndReset(false)}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
