import React from "react";
import { Weather } from "../../../../store/types";
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

export const Days = ({ weather }: Props) => {
  const today = new Date();
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

  const days: Day[] = [
    {
      day: "Сегодня",
      day_info: "",
      icon_id: "sun",
      temp_day: `+18`,
      temp_night: "+15",
      info: "Облачно",
    },
    {
      day: "Завтра",
      day_info: "",
      icon_id: "small_rain_sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Небольшой дождь и солнце",
    },
    {
      day: "",
      day_info: "",
      icon_id: "small_rain",
      temp_day: "+18",
      temp_night: "+15",
      info: "Небольшой дождь",
    },
    {
      day: "",
      day_info: "",
      icon_id: "mainly_cloudy",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      day: "",
      day_info: "",
      icon_id: "rain",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      day: "",
      day_info: "",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      day: "",
      day_info: "",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
  ];

  days.forEach((elem, index) => {
    const nextDay = new Date(today.getTime() + 24 * 60 * 60 * 1000 * index);
    elem.day_info = `${nextDay.getDate()} ${months[nextDay.getMonth()]}`;

    if (!(index == 0) && !(index == 1)) {
      elem.day = `${daysOfWeek[nextDay.getDay()]}`;
    }
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
