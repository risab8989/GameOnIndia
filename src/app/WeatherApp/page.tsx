"use client";

import { useState } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any | null>(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name.");
      setWeather(null);
      return;
    }

    try {
      const apiKey = '114067f8900ad8c02f4c70babaaa315c';
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      if (!response.ok) {
        if (response.status === 404) {
          setError("City not found.");
        } else {
          setError("Failed to fetch weather data.");
        }
        setWeather(null);
        return;
      }

      const data = await response.json();
      setError("");
      setWeather(data); 
    } catch (err) {
      setError("An error occurred while fetching weather data.");
      setWeather(null);
    }
  };

  const weatherIconUrl = weather
    ? `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    : "";

  const backgroundClass = weather?.weather[0].main.toLowerCase().includes("rain")
    ? "bg-gradient-to-br from-blue-500 to-gray-500 animate-rain"
    : weather?.weather[0].main.toLowerCase().includes("cloud")
    ? "bg-gradient-to-br from-gray-300 to-blue-500"
    : weather?.weather[0].main.toLowerCase().includes("clear")
    ? "bg-gradient-to-br from-yellow-300 to-orange-500 animate-sun"
    : "bg-gradient-to-br from-blue-400 to-green-200";

  return (
    <div className={`min-h-screen ${backgroundClass} flex items-center justify-center p-4 transition-all duration-1000`}>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Weather App
        </h1>

        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={fetchWeather}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Search
          </button>
        </div>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {weather && (
          <div className="text-center">
            <img
              src={weatherIconUrl}
              alt={weather.weather[0].description}
              className="w-24 mx-auto mb-4"
            />
            <p className="text-gray-800 text-lg font-bold">
              Weather in {weather.name}: {weather.weather[0].description}
            </p>
            <p className="text-lg">Temperature: {weather.main.temp}°C</p>
            <p className="text-lg">Humidity: {weather.main.humidity}%</p>
            <p className="text-lg">Wind Speed: {weather.wind.speed} m/s</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
