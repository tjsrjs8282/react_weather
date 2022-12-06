import React from 'react'

const WeatherBox = ({weather}) => {
  return (
    <div>
        <h1>{weather?.name}</h1>   
        <p>{weather?.main.temp}C</p>
        <p>{(weather?.main.temp *1.8) +32}</p>
        <p>{weather?.weather[0].description}</p>
    </div>
  )
}

export default WeatherBox