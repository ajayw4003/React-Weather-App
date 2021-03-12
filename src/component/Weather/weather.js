import React from 'react';
import "./weather.css";

const Weather = ({weather}) => {
    return (
        <div className = "weather-box">
          <div className = "temp">{Math.round(weather.main.temp)-273} &#x2103;</div>
          <div className = "weather">{weather.weather[0].main}</div>
        </div>
    );
};

export default Weather;