import React, { useEffect, useState } from "react";
import Select from "react-select";
import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";
import s from "./Header.module.scss";
import { changeCssRootVariables } from "../Header/ChangeCssRootVariables";
import { useDispatch } from "react-redux";
import {
  CityOption,
  cityOptionSlice,
} from "../../store/slices/cityOptionSlice";
// import cityOptionSliceReducer from "../../store/slices/cityOptionSlice";
import { AppDispatch } from "../../store/store";

type Props = {};

interface Option {
  value: string;
  label: string;
}

const Header = (props: Props) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const dispatch = useDispatch();

  const { changeCityOption } = cityOptionSlice.actions;

  const options: Option[] = [
    { value: CityOption.SaintPetersburg, label: "Санкт-Петербург" },
    { value: CityOption.Moscow, label: "Москва" },
    { value: CityOption.Novosibirsk, label: "Новосибирск" },
  ];

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: theme === "dark" ? "#4f4f4f" : "rgba(71, 147, 255, 0.2)",
      width: "190px",
      heigth: "27px",
      border: "none",
      borderRadius: "10px",
      zIndex: "100",
    }),

    singleValue: (styles: any) => ({
      ...styles,
      color: theme === "dark" ? "#fff" : "#000",
      fontWeight: "500",
      fontSize: "14px",
    }),

    option: (styles: any) => ({
      ...styles,
      backgroundColor: theme === "dark" ? "#4f4f4f" : "rgba(71, 147, 255, 0.2)",
      color: theme === "dark" ? "#fff" : "#000",
      fontWeight: "500",
      fontSize: "14px",
    }),

    menu: (styles: any) => ({
      ...styles,
      backgroundColor: theme === "dark" ? "#4f4f4f" : "rgba(71, 147, 255, 0.2)",
      zIndex: "100",
    }),
  };

  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
    changeCssRootVariables(theme);
  }, [theme]);

  const handleOption = (option: Option | null) => {
    if (option) {
      dispatch(changeCityOption(option.value));
    }
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>daily weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={changeTheme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select
          defaultValue={options[0]}
          styles={colourStyles}
          options={options}
          onChange={handleOption}
        />
      </div>
    </header>
  );
};

export default Header;
