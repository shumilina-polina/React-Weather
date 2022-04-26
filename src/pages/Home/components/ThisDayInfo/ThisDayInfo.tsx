import React from "react";
import s from "./ThisDayInfo.module.scss";
import cloud from "../../../../assets/images/cloud.png";
import ThisDayItem from "./ThisDayItem";
import { Weather } from "../../../../store/slices/currentWeatherSlice";

type Props = {
  weather: Weather;
};

export type Item = {
  icon_id: string;
  name: string;
  value: string;
};

const ThisDayInfo = ({ weather }: Props) => {
  let windDirection: string;
  weather.current.wind_deg >= 0 && weather.current.wind_deg < 90
    ? (windDirection = "северо-восток")
    : weather.current.wind_deg >= 90 && weather.current.wind_deg < 180
    ? (windDirection = "юго-восток")
    : weather.current.wind_deg >= 180 && weather.current.wind_deg < 270
    ? (windDirection = "юго-запад")
    : (windDirection = "северо-запад");

  let precipitation: string;
  switch (weather.current.weather[0].main) {
    case "Clear":
      precipitation = "Без осадков";
      break;
    case "Snow":
      precipitation = "Снег";
      break;
    default:
      precipitation = "Небольшие осадки";
      break;
  }

  const items: Item[] = [
    {
      icon_id: "temp",
      name: "Температура",
      value: `${Math.floor(weather.current.temp)}° - ощущается как ${Math.floor(
        weather.current.feels_like
      )}°`,
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: `${Math.floor(
        weather.current.pressure * 0.75
      )} мм ртутного столба - ${
        Math.floor(weather.current.pressure * 0.75) > 760
          ? "высокое"
          : "нормальное"
      }`,
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: `${precipitation}`,
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: `${Math.floor(
        weather.current.wind_speed
      )} м/с, ${windDirection} - ${
        weather.current.wind_speed < 7
          ? "легкий ветер"
          : weather.current.wind_speed < 13
          ? "средний ветер"
          : "сильный ветер"
      }`,
    },
  ];
  return (
    <section className={s.this__day_info}>
      <div className={s.this__day_info_items}>
        {items.map((item: Item) => (
          <ThisDayItem key={item.icon_id} item={item} />
        ))}
      </div>
      <img className={s.cloud__img} src={cloud} alt="Облако" />
    </section>
  );
};

export default ThisDayInfo;
