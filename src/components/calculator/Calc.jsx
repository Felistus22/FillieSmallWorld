
import React, { useState } from 'react'

function Calc() {

    const [ displayValue, setDisplayValue] = useState('');

    const handleButtonClick = (value) => {
        if (value === '.') {
            if (!displayValue.includes('.')) {
                setDisplayValue(displayValue + value);
            }
        }else 
        {
            setDisplayValue(displayValue + value);
        }
    }

    const handleEqualClick = () => {
        try{
            setDisplayValue(eval(displayValue));
        }catch (error)
        {
            setDisplayValue('Error!');
        }
    }

    const handleClearClick = () => {
        setDisplayValue('');
    }

    const handleDeleteClick = () => {
        setDisplayValue(displayValue.toString().slice(0,-1));
    }

  return (
    <div className='bg-[var(--primary-light)] dark:bg-[var(--primary-neutral)] min-h-screen'>
      <div id='input' className='min-h-screen flex justify-center '>
        <form action="" className='bg-slate-500 dark:bg-gray-700 h-full w-fit mt-4 p-3 rounded-md'>
            <div className='display'>
                <input type="text" name="display" value={displayValue} readOnly />
            </div>
            <div className='button'>
                <input type="button" value="AC" className='normal operator' onClick={() => handleClearClick()} />
                <input type="button" value="DE" className='normal operator'onClick={() => handleDeleteClick('.')} />
                <input type="button" value="." className='normal operator' onClick={() => handleButtonClick('.')} />
                <input type="button" value="/" className='normal operator' onClick={() => handleButtonClick('/')} />
            </div>

            <div>
                <input type="button" value="7" className='normal' onClick={() => handleButtonClick('7')}/>
                <input type="button" value="8" className='normal' onClick={() => handleButtonClick('8')} />
                <input type="button" value="9" className='normal' onClick={() => handleButtonClick('9')} />
                <input type="button" value="*" className='normal operator' onClick={() => handleButtonClick('*')} />
            </div>

            <div>
                <input type="button" value="4" className='normal' onClick={() => handleButtonClick('4')} />
                <input type="button" value="5" className='normal' onClick={() => handleButtonClick('5')} />
                <input type="button" value="6" className='normal' onClick={() => handleButtonClick('6')} />
                <input type="button" value="-" className='normal operator' onClick={() => handleButtonClick('-')} />
            </div>

            <div>
                <input type="button" value="1" className='normal' onClick={() => handleButtonClick('1')} />
                <input type="button" value="2" className='normal' onClick={() => handleButtonClick('2')} />
                <input type="button" value="3" className='normal' onClick={() => handleButtonClick('3')} />
                <input type="button" value="+" className='normal operator' onClick={() => handleButtonClick('+')} />
            </div>

            <div>
                <input type="button" value="00" className='normal' onClick={() => handleButtonClick('00')} />
                <input type="button" value="0" className='normal' onClick={() => handleButtonClick('0')} />
                <input type="button" value="=" className='normal equal operator' onClick={() => handleEqualClick()} />
            </div>

        </form>
      </div>
    </div>
  )
}

export default Calc
