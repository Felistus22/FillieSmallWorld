import React, {useEffect, useState} from 'react'
import {QuoteList} from './QuoteList'


function QuoteGenerator() {

    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            //increment the quote index
            setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % QuoteList.length) 
        }, 5000);
        return () => {
            clearInterval(interval);
        };//grid grid-cols-1 gap-1 place-items-center sm:w-auto
    }, []);// [] is the dependency of the useEffect hook

  return (
    <div className='bg-[var(--primary-neutral)] ml-24 mr-8 mt-20 flex flex-col justify-center text-center py-8 md:ml-64 border border-[var(--primary-light)] rounded'>
      <div className='py-6'>("Jiā yóu") 💪 You can do it!</div>
      <div className='text-xl p-6'>
         <p>{QuoteList[currentQuoteIndex].quote}</p>
         <p className='text-gray-300'>{QuoteList[currentQuoteIndex].author}</p>
       </div>
         
    </div>
  )
}

export default QuoteGenerator
