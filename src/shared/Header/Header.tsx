import React, { useEffect, useState } from "react";
import Select from "react-select";
import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";
import s from "./Header.module.scss";

type Props = {};

const Header = (props: Props) => {
  const options = [
    { value: "city-1", label: "Санкт-Петербург" },
    { value: "city-2", label: "Москва" },
    { value: "city-3", label: "Новгород" },
  ];

  const [theme, setTheme] = useState("light");

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: theme === "dark" ? "#4f4f4f" : "rgba(71, 147, 255, 0.2)",
      width: "210px",
      heigth: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: "100px",
    }),

    singleValue: (styles: any) => ({
      ...styles,
      color: theme === "dark" ? "#fff" : "#000",
      fontWeight: "500",
    }),
  };

  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    const root = document.querySelector(":root") as HTMLElement;

    const components = [
      "body-background",
      "components-background",
      "card-background",
      "card-shadow",
      "text-color",
    ];

    components.forEach(
      (component) => {
        root.style.setProperty(
          `--${component}-default`,
          `var(--${component}-${theme})`
        );
      },
      [theme]
    );
  });

  //   root.style.setProperty(
  //     "--body-background-default",
  //     `var(--body-background-${theme})`
  //   );
  // }, [theme]);

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>React weather</div>
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
