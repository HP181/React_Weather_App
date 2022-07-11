import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
<div className="ForecastDay">
      <div className="WeatherForecastDay">{day()}</div>
      <div className="WeatherForecastIcon">
        <WeatherIcon code={props.data.weather[0].icon} size={37} />
      </div>
      <div className="WeatherForecastTemp">
        <span className="WeatherForecastTemp-min">{minTemperature()}</span>🌡
        <span className="WeatherForecastTemp-max">{maxTemperature()}</span>
      </div>

      <div className="WeatherForecastDescription">
        {props.data.weather[0].description}
      </div>
    </div>

  );
}
