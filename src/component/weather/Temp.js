import React from 'react'
import './style.css';
import { useState } from 'react';
import { useEffect } from 'react';
import {WeatherCard} from './WeatherCard';
export const Temp = () => {
    const [searchValue, setSearchValue] = useState('Bankura');
    const [temInfo, setTempInfo] = useState({});
    const getWeatherInfo = async () => {
        try {
          let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=be52243fc6d5d7500f3c8b6034e7aabe`;
          const res = await fetch(url);
          const weatherData = await res.json();
          const { temp, humidity, pressure } = weatherData.main;
          const { main: weatherMode } = weatherData.weather[0];
          const { name } = weatherData;
          const { speed } = weatherData.wind;
          const { country, sunset } = weatherData.sys;
          const myNewWeatherData = {
            temp,
            humidity,
            pressure,
            weatherMode,
            name,
            speed,
            country,
            sunset
          };
          setTempInfo(myNewWeatherData);
          console.log(weatherData);
        } catch (error) {
          console.log(error);
        }
      };
      

    useEffect(() => {
        getWeatherInfo();
    },[]);
    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input
                        type="search"
                        placeholder="search..."
                        autoFocus
                        id="search"
                        className="searchTerm"
                        value={searchValue}
                        onChange={(e) => { setSearchValue(e.target.value) }}
                    />

                    <button
                        className="searchButton"
                        type="button"
                        onClick={getWeatherInfo}>
                        Search
                    </button>
                </div>
            </div>
            <WeatherCard {...temInfo}/>
        </>
    )
}
