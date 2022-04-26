import React from "react";
import { Weather } from "../../../../store/slices/currentWeatherSlice";
import { Card } from "./Card";
import s from "./Days.module.scss";
import { Tabs } from "./Tabs";

type Props = {
  weather: Weather;
};

export type Day = {
  day: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
};
export const days: Day[] = [
  {
    day: "Сегодня",
    day_info: "",
    icon_id: "sun",
    temp_day: "",
    temp_night: "",
    info: "Облачно",
  },
  {
    day: "Завтра",
    day_info: "",
    icon_id: "small_rain_sun",
    temp_day: "",
    temp_night: "",
    info: "Небольшой дождь и солнце",
  },
  {
    day: "",
    day_info: "",
    icon_id: "small_rain",
    temp_day: "",
    temp_night: "",
    info: "Небольшой дождь",
  },
  {
    day: "",
    day_info: "",
    icon_id: "mainly_cloudy",
    temp_day: "",
    temp_night: "",
    info: "",
  },
  {
    day: "",
    day_info: "",
    icon_id: "",
    temp_day: "",
    temp_night: "",
    info: "",
  },
  {
    day: "",
    day_info: "",
    icon_id: "",
    temp_day: "",
    temp_night: "",
    info: "",
  },
  {
    day: "",
    day_info: "",
    icon_id: "",
    temp_day: "",
    temp_night: "",
    info: "",
  },
];

const daysOfWeek = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
const months = [
  "января",
  "февраля",
  "марта ",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

export const Days = ({ weather }: Props) => {
  const today = new Date();

  //fill the objects
  days.forEach((elem, index) => {
    const nextDay = new Date(today.getTime() + 24 * 60 * 60 * 1000 * index);

    if (!(index === 0) && !(index === 1)) {
      elem.day = `${daysOfWeek[nextDay.getDay()]}`;
    }

    let info: string, icon_id: string;
    switch (weather.daily[index].weather[0].main) {
      case "Clouds":
        info = "Облачно";
        icon_id = "mainly_cloudy";
        break;
      case "Snow":
        info = "Снег";
        icon_id = "snow";
        break;
      case "Rain":
        info = "Дождь";
        icon_id = "rain";
        break;
      default:
        info = "Ясно";
        icon_id = "sun";
        break;
    }

    elem.day_info = `${nextDay.getDate()} ${months[nextDay.getMonth()]}`;
    elem.temp_day = `${Math.floor(weather.daily[index].temp.day)}`;
    elem.temp_night = `${Math.floor(weather.daily[index].temp.night)}`;
    elem.info = `${info}`;
    elem.icon_id = `${icon_id}`;
  });

  return (
    <>
      <Tabs />
      <section className={s.days}>
        {days.map((today: Day) => (
          <Card today={today} key={today.day} />
        ))}
      </section>
    </>
  );
};
