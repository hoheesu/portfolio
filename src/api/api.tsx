import { instance } from "./axios";

export const getWeather = async () => {
  const res = await instance.get(
    `/weather?lat=37.53&lon=127.02&appid=${import.meta.env.VITE_WEATHER_KEY}`,
    // `/weather?lat=44.34&lon=10.99&appid=${import.meta.env.VITE_WEATHER_KEY}`,
  );
  console.log(res.data.weather[0].main);
  return res.data;
};
