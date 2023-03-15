import { useEffect, useState } from "react";
import "./css/Temperature.css";
import WeatherIcons from "./weatherIcons/WeatherIcons";
import clearBg from "./clearBg.jpg";
import cloudsBg from "./cloudsBg.jpg";
import hazeBg from "./hazeBg.jpg";
import snowBg from "./snowBg.jpg";
import WeatherIconsNight from "./weatherIcons/WeatherIconsNight";

const Temperature = () => {
  const [city, setCity] = useState(null);
  const [cityWeather, setCityWeather] = useState(null);
  const [search, setSearch] = useState("Delhi");
  const [hour, setHour] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=`;
      const response = await fetch(url);
      const resJson = await response.json();
      const d = new Date(resJson.dt * 1000 + resJson.timezone * 1000);
      setHour(d.getUTCHours());
      setCity(resJson.main);
      if (resJson.weather && resJson.weather.length > 0) {
        setCityWeather(resJson.weather[0].main);
      }
    };

    fetchApi();
  }, [search, cityWeather, hour]);

  const Night = [19, 20, 21, 22, 23, 0, 1, 2, 3, 4, 5];

  let bg = clearBg;

  const Atmosphere = [
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Dust",
    "Ash",
    "Squall",
    "Tornado",
  ];

  const Moist = ["Rain", "Clouds", "Thunderstorm", "Drizzle"];

  if (Atmosphere.includes(cityWeather)) {
    bg = hazeBg;
  }

  if (Moist.includes(cityWeather)) {
    bg = cloudsBg;
  }

  if (cityWeather === "Snow") {
    bg = snowBg;
  }

  let weatherDisplay;

  if (Night.includes(hour)) {
    weatherDisplay = <WeatherIconsNight cityWeather={cityWeather} />;
  } else {
    weatherDisplay = <WeatherIcons cityWeather={cityWeather} />;
  }

  return (
    <div className="main" style={{ backgroundImage: `url(${bg})` }}>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputField"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p className="errorMsg"> No Data Found </p>
        ) : (
          <div className="info">
            <h1 className="temp">
              {city.temp.toFixed(0)}°<span>C</span>
            </h1>
            <h3 className="tempmin_max">
              Min : {city.temp_min.toFixed(0)}° | Max :{" "}
              {city.temp_max.toFixed(0)}° | Humidity : {city.humidity}%
            </h3>
            <h2 className="weather">{cityWeather}</h2>
            <h2 className="location">{search}</h2>
            <div className="weatherIcon">{weatherDisplay}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Temperature;
