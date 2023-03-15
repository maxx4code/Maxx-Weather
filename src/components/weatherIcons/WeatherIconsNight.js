import { Fragment } from "react";
import clouds from "./cloudsIcon.png";
import rain from "./rainIcon.png";
import snow from "./snowIcon.png";
import thunderstorm from "./thunderstormIcon.png";
import drizzle from "./drizzleIcon.png";
import clearNight from "./clearIconNight.png";
import hazeNight from "./hazeIconNight.png";

const WeatherIconsNight = (props) => {
  const weather = props.cityWeather;

  var icon = clearNight;

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

  if (weather === "Clouds") {
    icon = clouds;
  }

  if (Atmosphere.includes(weather)) {
    icon = hazeNight;
  }

  if (weather === "Rain") {
    icon = rain;
  }

  if (weather === "Snow") {
    icon = snow;
  }

  if (weather === "Thunderstorm") {
    icon = thunderstorm;
  }

  if (weather === "Snow") {
    icon = snow;
  }

  if (weather === "Drizzle") {
    icon = drizzle;
  }

  return (
    <Fragment>
      <img src={icon} alt="weatherIcon" />
    </Fragment>
  );
};

export default WeatherIconsNight;
