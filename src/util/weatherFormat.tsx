import { getWeather } from "../api/api.tsx";
import React from "react";

interface WeatherType {
  temp: number;
  weatherIcon: string;
}
async function weatherFormat() {
  const weatherData = await getWeather();
  const tempdata = (await weatherData.main.temp) - 273.15;
  const temp = Math.round(tempdata * 10) / 10;
  const weather = weatherData.weather[0].main;

  let weatherIcon = "";

  switch (weather) {
    case "Clear":
      weatherIcon = "ph:sun-bold";
      break;
    case "Clouds":
      weatherIcon = "material-symbols:cloud-outline";
      break;
    case "Thunderstorm":
      weatherIcon = "material-symbols:thunderstorm-outline";
      break;
    case "Rain":
      weatherIcon = "carbon:rain";
      break;
    case "Snow":
      weatherIcon = "ion:snow";
      break;
    case "Drizzle":
      weatherIcon = "ri:drizzle-line";
      break;
    default:
      weatherIcon = "mdi:weather-mist";
      break;
  }
  // console.log(temp, weatherIcon);

  return { temp: temp, weatherIcon: weatherIcon };
}

export default weatherFormat;
