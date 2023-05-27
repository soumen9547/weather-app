import React from 'react'
import { useEffect, useState } from 'react';

export const WeatherCard = ({ temp,
    humidity,
    pressure,
    weatherMode,
    name,
    speed,
    country,
    sunset }) => {
    const [weatherState, setWheatherState] = useState("");
    let sec = sunset;
    let date = new Date(sec * 1000);
    let timestr = `${date.getHours()}:${date.getMinutes()}`;
    useEffect(() => {
        if (weatherMode) {
            switch (weatherMode) {
                case "Clouds":
                    setWheatherState("wi-day-cloudy");
                    break;
                case "Haze":
                    setWheatherState("wi-fog");
                    break;
                case "Clear":
                    setWheatherState("wi-day-sunny");
                    break;
                case "Mist":
                    setWheatherState("wi-dust");
                    break;

                default:
                    setWheatherState("wi-day-sunny");
                    break;
            }
        }
    }, [weatherMode]);
    return (
        <>
            <article className='widget'>
                <div className='weatherIcon'>
                    <i className={`wi ${weatherState}`}></i>
                </div>
                <div className='weatherInfo'>
                    <div className='temperature'>
                        <span>{temp}&deg;</span>
                    </div>
                    <div className='description'>
                        <div className='weatherCondition'>{weatherMode}</div>
                        <div className='place'>{name},{country}</div>
                    </div>
                </div>
                <div className='date'>
                    {new Date().toLocaleDateString()}
                </div>
                <div className='extra-temp'>
                    <div className='temp-info-minmax'>
                        <div className="two-sided-section">
                            <p><i className={"wi wi-sunset"}></i></p>
                            <p className='extra-info-leftside'>{timestr} pm<br /> Sunset</p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className={"wi wi-humidity"}></i></p>
                            <p className='extra-info-leftside'>{humidity}<br /> Humidity</p>
                        </div>
                    </div>
                    <div className='weather-extra-info'>
                        <div className="two-sided-section">
                            <p><i className={"wi wi-rain"}></i></p>
                            <p className='extra-info-leftside'>{pressure}<br /> Pressure</p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className={"wi wi-strong-wind"}></i></p>
                            <p className='extra-info-leftside'>{speed}<br /> Speed</p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
