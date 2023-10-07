import React from 'react';

const Weather = () => {
  return (
    <div>
      <div>
        <div>
          <input type="text" name="city" className='m-2 min-w-500 border' placeholder='Enter City Name' />
          <input type="search" name="search" className='m-2 text-red-400' />
        </div>
        <div>
          <img src="" alt="" />
          <h2>22°C</h2>
        </div>
      </div>
      //https://api.openweathermap.org/data/2.5/weather?q=nairobi&appid=93e385512f5bf7f019f63ae41a69a082&units=metric
      //93e385512f5bf7f019f63ae41a69a082
    </div>
  )
}

export default Weather
