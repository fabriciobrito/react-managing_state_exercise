import React, {Component} from 'react'

class Question extends Component {
  constructor(props){
    super(props);
    const initialValues = this.setGameVariables();
    this.state = {
      value1: initialValues[0],
      value2: initialValues[1],
      value3: initialValues[2],
      proposedAnswer: initialValues[3]
    }
  }
  setGameVariables = () => {
    const v1 = Math.floor(Math.random() * 100), v2 = Math.floor(Math.random() * 100), v3 = Math.floor(Math.random() * 100);
    return [v1, v2, v3, Math.floor(Math.random() * 3) + v1 + v2 + v3];
  }
  checkAnswer(playerAnswer){
    const correctAnswer = this.state.value1 + this.state.value2 + this.state.value3 === this.state.proposedAnswer;
    const newValues = this.setGameVariables();
    this.setState((prevState) => { 
      return{
        value1: newValues[0],
        value2: newValues[1],
        value3: newValues[2],
        proposedAnswer: newValues[3]
      }
    });
    this.props.result(playerAnswer === correctAnswer);
  }
  render(){
    return(
      <span>
        <div className="equation">
          <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
        </div>
        <button onClick={() => this.checkAnswer(true)}>True</button>
        <button onClick={() => this.checkAnswer(false)}>False</button>
      </span>
    );
  }
}

export default Question;