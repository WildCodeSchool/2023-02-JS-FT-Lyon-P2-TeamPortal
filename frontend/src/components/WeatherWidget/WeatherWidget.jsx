import React from 'react';
import {useState, useEffect} from "react";
import "./WeatherWidget.css";

export default function WeatherWidget() {
    const url = `https://api.open-meteo.com/v1/dwd-icon?latitude=45.75&longitude=4.85&hourly=relativehumidity_2m&hourly=apparent_temperature,surface_pressure,windspeed_10m&daily=temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto&past_days=1`

    const weatherCodes = {
        0: "clear sky",
        1: "mainly clear",
        2: "partly cloudy",
        3: "overcast",
        45: "fog",
        48: "rime fog",
        51: "light drizzle",
        53: "moderate drizzle",
        55: "dense drizzle",
        56: "light freezing drizzle",
        57: "dense freezing drizzle",
        61: "slight rain",
        63: "moderate rain",
        65: "heavy rain",
        66: "light freezing rain",
        67: "heavy freezing rain",
        71: "slight snowfall",
        73: "moderate snowfall",
        75: "heavy snowfall",
        77: "snow grains",
        80: "slight rain showers",
        81: "moderate rain showers",
        82: "violent rain showers",
        85: "slight show showers",
        86: "heavy snow showers",
        95: "slight thunderstorm",
        96: "thunderstorm with hail",
    }
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(weatherData => {
                setData(weatherData)
                console.log(weatherData)
            })
            .catch(error => console.error(error));
    }, []);

    return <div className="weather-widget-container">
        {data ? <>
            <div className="top">
                <div className="day-date-location">
                    <p className="day">Mardi</p>
                    <p className="date">25 avril 2023</p>
                    <p className="location">Lyon, FR</p>
                </div>

                <div className="weather-icon">
                    <figcaption>
                        <img id="current-weather"
                             src={`/src/assets/WeatherWidgetIcons/${data.current_weather.weathercode}.png`}
                             alt="weather.png"/>
                        <p className="center">({weatherCodes[data.current_weather.weathercode]})</p>
                    </figcaption>
                </div>
            </div>

            <div className="bottom">
                <div className="degrees-container">
                    <h1 className="degrees">{Math.round(data.current_weather.temperature)}°C</h1>

                    <p className="min-max-temperature">
							<span
                                className="min-temperature">{Math.round(data.daily.temperature_2m_min[0])}°C</span> / <span
                        className="max-temperature">{Math.round(data.daily.temperature_2m_max[0])}°C</span>
                    </p>
                </div>

                <div className="more-information">
                    <div className="feels-like">
                        <p className="label">feels like:</p>
                        <p className="content">{Math.round(data.current_weather.temperature) - 1}°C</p>
                    </div>

                    <div className="humidity">
                        <p className="label">humidity:</p>
                        <p className="content">{data.hourly.relativehumidity_2m[0]}%</p>
                    </div>

                    <div className="wind">
                        <p className="label">wind:</p>
                        <p className="content">{Math.round(data.current_weather.windspeed)} m/s</p>
                    </div>

                    <div className="pressure">
                        <p className="label">pressure:</p>
                        <p className="content">{Math.round(data.hourly.surface_pressure[0])} hPa</p>
                    </div>
                </div>
            </div>
        </> : <p>Loading...</p>}


    </div>
}
