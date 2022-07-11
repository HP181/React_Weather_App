import React, { useEffect, useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("warsaw");

  const search = async () => {
    try {
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;

      const response = await fetch(apiUrl).then((res) => res.json());

      if (response.cod == 200) {
        setWeatherData({
          ready: true,
          city: response.name,
          country: response.sys.country,
          temperature: response.main.temp,
          maxTemp: response.main.temp_max,
          minTemp: response.main.temp_min,
          feelsLike: response.main.feels_like,
          pressure: response.main.pressure,
          visibility: response.visibility,
          clouds: response.clouds.all,
          humidity: response.main.humidity,
          weatherMain: response.weather[0].main,
          description: response.weather[0].description,
          windSpeed: response.wind.speed,
          coordinates: response.coord,
          icon: response.weather[0].icon,
          date: new Date(response.dt * 1000),
          cod: response.cod,
        });
      } else if (response.cod == 404) {
        toast.error("Please enter valid city", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        // if(!w)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    search();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    search();
    setCity("");
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-3">
              <input
                name="search"
                type="search"
                placeholder="Enter a City..."
                className="form-control"
                value={city}
                onChange={handleCityChange}
                required={true}
              />
            </div>
            <div className="col-3">
              <button type="submit" className="searchButton">
                🔎
              </button>
            </div>
          </div>
        </form>

        <div className="row">
          <div className="col-5">
            <WeatherInfo data={weatherData} />
          </div>
          <div className="col-7">
            <h2>DAILY FORECAST</h2>
            <WeatherForecast coordinates={weatherData.coordinates} />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return null;
  }
}
