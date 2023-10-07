import React, {useState} from 'react'
import QuizItem from './QuizItem'
import {QuizList} from './QuizList' //imports quizlist as an array

function App() {
  
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const currentQuiz = QuizList[currentQuizIndex];

  return (
    <div>
      <h2>Jog your mind</h2>
      <div className='quizList'>
        
            <QuizItem
            Q={currentQuiz.Q} correctanswer={currentQuiz.correctanswer} choices={currentQuiz.choices} />
          
      </div>
    </div>
  )
}

export default App
