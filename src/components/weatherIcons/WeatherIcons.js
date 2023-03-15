import { Fragment } from "react";
import clouds from "./cloudsIcon.png";
import haze from "./hazeIcon.png";
import clear from "./clearIcon.png";
import rain from "./rainIcon.png";
import snow from "./snowIcon.png";
import thunderstorm from "./thunderstormIcon.png";
import drizzle from "./drizzleIcon.png";

const WeatherIcons = (props) => {
  const weather = props.cityWeather;

  var icon = clear;

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
    icon = haze;
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

export default WeatherIcons;
