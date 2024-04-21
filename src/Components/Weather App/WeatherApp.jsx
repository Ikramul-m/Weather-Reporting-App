import React from "react";
import "./WeatherApp.css";

import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import snow_icon from "../Assets/snow.png";
import rain_icon from "../Assets/rain.png";
import wind_icon from "../Assets/wind.png";
import humdity_icon from "../Assets/humidity.png";

const WeatherApp = () => {
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search" />
        <div className="search-icon">
          <img src={search_icon} alt="" />
        </div>
      </div>

      <div className="weather-image">
        <img src={cloud_icon} alt="" />
      </div>

      <div className="weather-temp">24°C</div>
    </div>
  );
};

export default WeatherApp;
