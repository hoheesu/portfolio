import { instance } from "./axios";

export const getWeather = async () => {
  const res = await instance.get(
    `/weather?lat=37.53&lon=127.02&appid=${import.meta.env.VITE_WEATHER_KEY}`,
  );
  console.log(res.data);
  return res.data;
};
