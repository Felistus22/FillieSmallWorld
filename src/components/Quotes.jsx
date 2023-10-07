import React from 'react'
import QuoteGenerator from './QuoteGenerator'

function Quotes() {
  return (
    <div className='bg-[var(--primary-dark)]' >
        <p className='h-6'></p>
        <div className='font-bold ml-6 bg-[var(--primary-light)] dark:bg-[var(--primary-dark)] min-h-screen '>
            <p className='text-white text-xl min-h-[50px]rounded bg-slate-500 p-4 border border-[var(--primary-light)] w-2/5 h-[190px]'>Are you demotivated, unhappy, burnt out, or even have some anxiety? <br /> <span className='text-[var(--primary-light)]'>Don't worry I gatchu🤗</span></p>

        <QuoteGenerator />
        </div>
    </div>
    
  )
}

export default Quotes
