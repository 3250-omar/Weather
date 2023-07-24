import React from "react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { WeatherWithCityName } from "../Apis/CurrentWeather";

export const ResultWeather = (props) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState({});
  const SearchWeather = () => {
    fetch(
      `${WeatherWithCityName.url}/weather/?q=${search}&appid=${WeatherWithCityName.key}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  return (
    <div className="board">
      <div className="header">
        <input
          type="text"
          placeholder="Type Any City"
          required
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={SearchWeather}>
          <BsSearch />
        </button>
      </div>
      <div className="main">
        {typeof data.name != "undefined" ? (
          <div className="content">
            <div className="detailsHeading">
              <h1> {data.name}</h1>
              <p>{data.weather[0].main}</p>
            </div>
            <div className="temp">
              <p>Current Temp :{data.main.temp} &deg;C</p>
              <div className="minMax">
                <p>Min Temp :{data.main.temp_min} &deg;C</p>
                <p>Max Temp :{data.main.temp_max} &deg;C</p>
              </div>
            </div>
            <h3>Humidity: {data.main.humidity}%</h3>
          </div>
        ) : (
          <p className="error">Search For any city weather</p>
        )}
      </div>
    </div>
  );
};
