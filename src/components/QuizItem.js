import React, { useState } from 'react'
import QuizList from './QuizList';

function QuizItem({Q, choices, correctanswer, onNextQuiz}) {

    const letterOptions = ['A', 'B', 'C', 'D'];
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
    const currentQuiz = QuizList[currentQuizIndex];
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null); // Initially not answered

    const selectAnswer = (choice) => {
        setSelectedAnswer(choice);
        //setIsAnswerCorrect(null); Reset the correctness status when a new answer is selected
    };
    const checkAnswer = () => {
        if (selectedAnswer === correctanswer) {
          setIsAnswerCorrect(true);
        } else {
          setIsAnswerCorrect(false);
        }
      };
    
    const nextQuiz = () => {
        if (currentQuizIndex < QuizList.length - 1) {
            setCurrentQuizIndex(currentQuizIndex + 1);
            setSelectedAnswer('');
          }else{
            // Output a message indicating that the quiz is done
            console.log("Congratulations! You have completed the quiz.");
            setCurrentQuizIndex(0);
          }
    }

  return (
    <div className='quizItem'>
       
      <div>
        <div><span>Question: </span>{currentQuiz.Q}</div>
        {currentQuiz.choices.map((choice, index) => (
          <button style={{ display: 'block', marginBottom: '5px',  background:
          selectedAnswer === choice
            ? isAnswerCorrect === true
              ? 'green' // Correct answer
              : 'red' // Incorrect answer
            : '', }} key={index} onClick={() => selectAnswer(choice)}>
            {letterOptions[index]}: {choice}
          </button>
        ))}
       </div>

       {/*a conditional rendering statement. It checks if selectedAnswer is truthy
      conditional rendering, based on the current quiz index, if its true then the Next button is rendered
      {currentQuizIndex < QuizList.length - 1 && (<button onClick={nextQuiz}>Next</button>)}*/}
      {selectedAnswer && (
        <div>
          <div>
            {isAnswerCorrect === true && <p>Correct answer!</p>}
            {isAnswerCorrect === false && <p>Incorrect answer! The correct answer is <b> {currentQuiz.correctanswer} </b></p>}
          </div>
          <button onClick={()=>checkAnswer()}>Check Answer</button>
          {nextQuiz && (
            <button onClick={nextQuiz}>Next</button>
          )}
        </div>
      )}
    </div>
    
  )
}

export default QuizItem
