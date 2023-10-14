import React, { useState } from 'react'
import { QwizList } from './QwizList';

function Qwiz() {
    const letterOptions = ['A', 'B', 'C', 'D'];
    const [questionIndex, setQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [correctAnswers, setCorrectAnswers] = useState(0);

    const handleAnswerSelect = (selectedAnswer) => {
        // check if the selected answer is correct
        const isCorrect = selectedAnswer === QwizList[questionIndex].correctanswer;

        //update correct answers count
        if (isCorrect){
            setCorrectAnswers(correctAnswers + 1);
        }

        //add the user's answer to the userAnswers array
        setUserAnswers([...userAnswers, {Q:QwizList[questionIndex].Q, choice: selectedAnswer, isCorrect}])

        //Move to the next qwiz
        setQuestionIndex(questionIndex + 1);
    };

  return (
    <div className='p-3 bg-black h-[88vh] flex flex-col justify-center items-center'>
        <h1 className='text-slate-400 text-2xl'> jiā yóu, finish the qwiz!!!</h1>
      <div className='p-2 text-lg'>
        {questionIndex < QwizList.length? (
            <div className='p-3 bg-slate-400 leading-10'>
                <h2 className='text-slate-900 font-semibold bg-slate-400 rounded-md leading-7'>{QwizList[questionIndex].Q}</h2>
                <ul>
                    {QwizList[questionIndex].choices.map((choice, index) => (
                        <li key={index}>
                            <button onClick={() => handleAnswerSelect(choice)}>{letterOptions[index]}. {choice}</button>
                        </li>
                    ))}
                </ul>
            </div>
        ) : (
            //display the score when all qwizs are completed
            <div className='m-2 p-3 bg-zinc-300 flex flex-col justify-center items-start text-xl'>
                <h2 className='p-2 text-indigo-800 items-center'>Qwiz Complete</h2>
                <p>Correct Answers: <b className='text-indigo-400'>{correctAnswers}/{QwizList.length}</b></p>
                <p className='text-lg mt-6 text-red-950'>Review:</p>
                <ul>
                    {userAnswers.map((userAnswer, index) => (
                        <li key={index} className='p-1'>
                            {userAnswer.Q} : {userAnswer.choice} 
                            <b>({userAnswer.isCorrect ? "✔️" : "❌"})</b>
                        </li>
                    ))}
                </ul>
            </div>
        )}
      </div>
    </div>
  );
}

export default Qwiz
