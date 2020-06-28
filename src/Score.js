import React from 'react'

const Score = (props) => {
  const {correct, question} = props;
  return(
    <p className="text">
      {`Your Score: ${correct}/${question}`}
    </p>
  );
}

export default Score;