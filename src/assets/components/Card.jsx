import React, { useEffect, useState } from 'react'
import './Card.css'

const card = () => {
  let temp;
  const [city, setCity] = useState("Pune");
  const[weather, setWeather] = useState()
  const [data, setData] = useState([])
  const [display, setDisplay] = useState("Pune");

  const fetchApi = async () => {
    const url = (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=43c0e715b382627d0d13bede5472e5c2&units=metric`)
    let response = await fetch(url);
    let result = await response.json();
    setData(result.main);
  }

  useEffect(() => {
    fetchApi();
  }, [])

  const handleChange = (e) => {
    setCity(e.target.value)
  }

  const handleClick = (e) => {
    setDisplay(city)
    fetchApi();
  }

  return (
    <div>
      <div className='box min-h-[80vh] w-[40vw] bg-blue-300 m-auto mt-10 rounded-xl'>
        <div className='flex justify-center items-center gap-3'>
          <input type="search" onChange={handleChange} className='rounded-3xl mt-2 h-12 w-1/2 px-3' placeholder='Enter Location...' autoFocus />
          <div>
            <button className='font-semibold' type="button"  onClick={handleClick}>Search</button>
          </div>
        </div>
        {(!data) ? (<p className='text-2xl mt-5 text-center'>No Data Found!</p>) : (
          <div className='info text-center'>
            <div className='location mt-20 text-6xl m-4'>
              {`${display}`}
            </div>
            <div className='temp text-5xl m-4'>{data.temp}°C</div>
            <div className='temp-min_max text-xl text-gray-600'>Min : {data.temp_min}°C | Max : {data.temp_max}°C</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default card
