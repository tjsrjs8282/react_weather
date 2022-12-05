import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      console.log("현재위치 ", lat, lon);
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9174a3dd9f480af2752aa0eb0c28ab53`;

    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
  };
  useEffect(() => {
    getCurrentLocation();
  }, []);

  return <div className="App">dd</div>;
}

export default App;
