import React, { useEffect, useState } from "react";
import Select from "react-select";
import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";
import s from "./Header.module.scss";
import { changeCssRootVariables } from "../Header/ChangeCssRootVariables";

type Props = {};

const Header = (props: Props) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const options = [
    { value: "city-1", label: "Санкт-Петербург" },
    { value: "city-2", label: "Москва" },
    { value: "city-3", label: "Новгород" },
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
        />
      </div>
    </header>
  );
};

export default Header;
