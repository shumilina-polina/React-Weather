import React, { useEffect, useState } from "react";
import s from "./ThisDay.module.scss";

export const CurrentTime = () => {
  const [time, setTime] = useState(
    new Date().toTimeString().replace(/:[0-9][0-9] .*/, "")
  );

  useEffect(() => {
    let intervalId = setInterval(() => {
      setTime(new Date().toTimeString().replace(/:[0-9][0-9] .*/, ""));
    }, 60000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div className={s.this__time}>{time}</div>;
};
