import React from "react";
import GlobalSvgSelector from "../../../../assets/icons/global/GlobalSvgSelector";
import { Weather } from "../../../../store/types";
import s from "./ThisDay.module.scss";

type Props = {
  weather: Weather;
};

const ThisDay = ({ weather }: Props) => {
  const currentDate = new Date();
  const daysOfWeek = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];

  return (
    <section className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>{Math.floor(weather.current.temp)}°</div>
          <div className={s.this__day_name}>
            {daysOfWeek[currentDate.getDay()]}
          </div>
        </div>
        <GlobalSvgSelector id="sun" />
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>
          Время: <span>21:54</span>
        </div>
        <div className={s.this__city}>Санкт-Петербург</div>
      </div>
    </section>
  );
};

export default ThisDay;
