import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 id="cityName">
        <span className="cityH1">{props.data.city},</span>{" "}
        <span className="countryH1">{props.data.country}</span>
      </h1>
      <div className="row">
        <div className="col-3">
          <span className="mainTemp">
            {Math.round(props.data.temperature)}°
          </span>
          <span className="celsius"></span>
        </div>
        <div className="col-5">
          <ul className="mainInfo">
            <li>max {Math.round(props.data.maxTemp)}°</li>
            <li>min {Math.round(props.data.minTemp)}°</li>
            <li>feels like {Math.round(props.data.feelsLike)}°</li>
          </ul>
        </div>
        <div id="mainIcon" className="col-4">
          <WeatherIcon code={props.data.icon} size={70} />
        </div>
      </div>
      <p className="mainDescription">
        {props.data.weatherMain}
        <br />
        ________________________________________
      </p>
      <br />
      <ul>
        <div className="row">
          <div className="col-6" id="textLeft">
            <li>Weather </li>
            <li>Relative humidity </li>
            <li>Wind speed</li>
            <li>Visibility </li>
            <li>Pressure</li>
            <li>Clouds</li>
          </div>
          <div className="col-6" id="textRight">
            <li>
              <span className="textLeft"> {props.data.description}</span>
            </li>
            <li>
              <span className="textLeft">{props.data.humidity} %</span>
            </li>
            <li>
              <span className="textLeft">
                {Math.round(props.data.windSpeed)} m/s
              </span>
            </li>
            <li>
              <span className="textLeft">
                {props.data.visibility / 1000} km
              </span>
            </li>
            <li>
              <span className="textLeft">{props.data.pressure} hPa</span>
            </li>
            <li>
              <span className="textLeft">{props.data.clouds} %</span>
            </li>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
          </div>
        </div>
      </ul>
    </div>
  );
}
