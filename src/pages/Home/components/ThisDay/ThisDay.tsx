import React from "react";
import { useSelector } from "react-redux";
import GlobalSvgSelector from "../../../../assets/icons/global/GlobalSvgSelector";
import { CityOption } from "../../../../store/slices/cityOptionSlice";
import { Weather } from "../../../../store/slices/currentWeatherSlice";
import { RootState } from "../../../../store/store";
import { CurrentTime } from "./CurrentTime";
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
  let icon_id: string;
  switch (weather.current.weather[0].main) {
    case "Clouds":
      icon_id = "mainly_cloudy";
      break;
    case "Snow":
      icon_id = "snow";
      break;
    case "Rain":
      icon_id = "rain";
      break;
    default:
      icon_id = "sun";
      break;
  }

  const { cityName } = useSelector(
    (state: RootState) => state.cityOptionSliceReducer
  );
  let cityLabel: string;
  switch (cityName) {
    case CityOption.SaintPetersburg:
      cityLabel = "Санкт-Петербург";
      break;
    case CityOption.Moscow:
      cityLabel = "Москва";
      break;
    case CityOption.Novosibirsk:
      cityLabel = "Новосибирск";
      break;
    default:
      cityLabel = "Санкт-Петербург";
      break;
  }
  return (
    <section className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>
            {Math.floor(weather.current.temp)}°
          </div>
          <div className={s.this__day_name}>
            {daysOfWeek[currentDate.getDay()]}
          </div>
        </div>
        <GlobalSvgSelector id={icon_id} />
      </div>
      <div className={s.bottom__block}>
        <CurrentTime />
        <div className={s.this__city}>{cityLabel}</div>
      </div>
    </section>
  );
};

export default ThisDay;
