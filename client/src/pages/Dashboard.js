import { useState } from "react";
import axios from "axios";
import WeatherChart from "../components/WeatherChart";
import { motion } from "framer-motion";

function Dashboard() {

  const [city, setCity] =
    useState("");

  const [weather, setWeather] =
    useState(null);

  const [darkMode, setDarkMode] =
    useState(false);

  const [favorites, setFavorites] =
    useState([]);

  const API_KEY =
    "396e9b10e8cc4c3ea4263306262305";

  const getWeather = async () => {

    try {

      const res =
        await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=yes`
        );

      setWeather(res.data);

    } catch (err) {

      console.log(err);

      alert("City not found");
    }
  };

  const getCurrentLocation =
    () => {

      navigator.geolocation.getCurrentPosition(
        async (position) => {

          const lat =
            position.coords.latitude;

          const lon =
            position.coords.longitude;

          const res =
            await axios.get(
              `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=5&aqi=yes`
            );

          setWeather(res.data);
        }
      );
    };

  const addFavorite = () => {

    if (
      weather &&
      !favorites.includes(
        weather.location.name
      )
    ) {

      setFavorites([
        ...favorites,
        weather.location.name,
      ]);
    }
  };

  return (

    <div
      className={`min-h-screen p-5 lg:p-10 transition duration-500 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-blue-900 to-cyan-500 text-white"
      }`}
    >

      {/* HEADER */}

      <div className="flex flex-wrap justify-between items-center gap-5">

        <h1 className="text-4xl lg:text-5xl font-bold">
          ClimateX Dashboard
        </h1>

        <button
          onClick={() =>
            setDarkMode(!darkMode)
          }
          className="bg-black px-6 py-3 rounded-2xl"
        >
          {darkMode
            ? "Light Mode"
            : "Dark Mode"}
        </button>

      </div>

      {/* SEARCH */}

      <div className="mt-10 flex flex-wrap gap-5">

        <input
          type="text"
          placeholder="Search city"
          value={city}
          onChange={(e) =>
            setCity(e.target.value)
          }
          className="p-4 rounded-2xl w-[300px] text-black outline-none"
        />

        <button
          onClick={getWeather}
          className="bg-white text-blue-700 px-8 rounded-2xl font-bold"
        >
          Search
        </button>

        <button
          onClick={getCurrentLocation}
          className="bg-green-500 px-8 rounded-2xl font-bold"
        >
          My Location
        </button>

        <button
          onClick={addFavorite}
          className="bg-pink-500 px-8 rounded-2xl font-bold"
        >
          ❤️ Favorite
        </button>

      </div>

      {/* FAVORITES */}

      {favorites.length > 0 && (

        <div className="mt-10">

          <h2 className="text-3xl font-bold mb-5">
            Favorite Cities
          </h2>

          <div className="flex flex-wrap gap-4">

            {favorites.map(
              (fav, index) => (

                <div
                  key={index}
                  className="bg-white text-black px-5 py-3 rounded-2xl"
                >
                  {fav}
                </div>
              )
            )}

          </div>

        </div>

      )}

      {/* CURRENT WEATHER */}

      {weather && (

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className={`mt-10 p-10 rounded-3xl shadow-2xl ${
            darkMode
              ? "bg-gray-800 text-white"
              : "bg-white text-black"
          }`}
        >

          <div className="flex flex-wrap justify-between items-center">

            <div>

              <h2 className="text-4xl font-bold">
                {weather.location.name}
              </h2>

              <p className="text-xl text-gray-400 mt-2">
                {weather.location.country}
              </p>

            </div>

            <img
              src={weather.current.condition.icon}
              alt="weather"
            />

          </div>

          <h1 className="text-7xl font-bold text-blue-500 mt-8">
            {weather.current.temp_c}°
          </h1>

          <p className="text-2xl mt-4">
            {
              weather.current.condition
                .text
            }
          </p>

          {/* INFO CARDS */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">

            <div
              className={`p-5 rounded-2xl ${
                darkMode
                  ? "bg-gray-700"
                  : "bg-gray-100"
              }`}
            >
              <p>Humidity</p>

              <h3 className="text-3xl font-bold mt-2">
                {weather.current.humidity}%
              </h3>
            </div>

            <div
              className={`p-5 rounded-2xl ${
                darkMode
                  ? "bg-gray-700"
                  : "bg-gray-100"
              }`}
            >
              <p>Wind Speed</p>

              <h3 className="text-3xl font-bold mt-2">
                {
                  weather.current.wind_kph
                } km/h
              </h3>
            </div>

            <div
              className={`p-5 rounded-2xl ${
                darkMode
                  ? "bg-gray-700"
                  : "bg-gray-100"
              }`}
            >
              <p>Air Quality</p>

              <h3 className="text-3xl font-bold mt-2">
                {
                  weather.current.air_quality[
                    "us-epa-index"
                  ]
                }
              </h3>
            </div>

          </div>

        </motion.div>

      )}

      {/* HOURLY FORECAST */}

      {weather && (

        <div className="mt-14">

          <h2 className="text-4xl font-bold mb-8">
            Hourly Forecast
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">

            {weather.forecast.forecastday[0].hour
              .slice(0, 12)
              .map((hour, index) => (

                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                  }}
                  className={`p-5 rounded-2xl text-center ${
                    darkMode
                      ? "bg-gray-800"
                      : "bg-white text-black"
                  }`}
                >

                  <p>
                    {hour.time.split(" ")[1]}
                  </p>

                  <img
                    src={hour.condition.icon}
                    alt="hour"
                    className="mx-auto"
                  />

                  <h3 className="text-2xl font-bold">
                    {hour.temp_c}°
                  </h3>

                </motion.div>
              ))}

          </div>

        </div>

      )}

      {/* 5 DAY FORECAST */}

      {weather && (

        <div className="mt-14">

          <h2 className="text-4xl font-bold mb-8">
            5 Day Forecast
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">

            {weather.forecast.forecastday.map(
              (day, index) => (

                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                  }}
                  className={`p-6 rounded-3xl shadow-xl text-center ${
                    darkMode
                      ? "bg-gray-800"
                      : "bg-white text-black"
                  }`}
                >

                  <h3 className="text-xl font-bold">
                    {day.date}
                  </h3>

                  <img
                    src={day.day.condition.icon}
                    alt="forecast"
                    className="mx-auto"
                  />

                  <p className="text-3xl font-bold text-blue-500">
                    {day.day.avgtemp_c}°
                  </p>

                  <p className="mt-2">
                    {
                      day.day.condition
                        .text
                    }
                  </p>

                </motion.div>
              )
            )}

          </div>

        </div>

      )}

      {/* WEATHER CHART */}

      {weather && (

        <WeatherChart
          weather={weather}
        />

      )}

    </div>
  );
}

export default Dashboard;