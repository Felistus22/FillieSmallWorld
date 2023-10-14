import React from 'react'
import {Link} from 'react-router-dom'


function Landing() {
  return (
    <div className='bg-black text-white h-full w-full m-auto'>
        <div className='flex justify-center text-lg'>
            <div className='p-6 text-[var(--primary-light)]'><Link to='/'>FILLIESMALLWORLD</Link></div>
            <div className='grid grid-flow-col gap-5 p-6 text-2xl justify-between'>
                <Link to='/quotes'>Random Quotes</Link>
                <Link to='/calc'>Calculator</Link> 
                <Link to='/weather'>Weather App</Link>
                <Link to='/qwiz'>Try A Qwiz</Link>
            </div>
        </div>
    </div>
  )
}

export default Landing
