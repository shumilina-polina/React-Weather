import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { fetchCurrentWeather } from "../../store/thunks/fetchCurrentWeather";
import { Days } from "./components/Days/Days";
import ThisDay from "./components/ThisDay/ThisDay";
import ThisDayInfo from "./components/ThisDayInfo/ThisDayInfo";
import s from "./Home.module.scss";

type Props = {};

const Home = (props: Props) => {
  const dispatch = useDispatch();

  const { weather } = useSelector(
    (state: RootState) => state.currentWeatherSliceReducer
  );

  const { cityName } = useSelector(
    (state: RootState) => state.cityOptionSliceReducer
  );

  useEffect(() => {
    dispatch(fetchCurrentWeather(cityName));
  }, [cityName]);

  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay weather={weather} />
        <ThisDayInfo weather={weather} />
      </div>
      <Days weather={weather} />
    </div>
  );
};

export { Home };
