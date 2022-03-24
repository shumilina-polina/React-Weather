export type Daily = {
  temp: {
    day: number;
    night: number;
  };
  weather: [{ main: string }];
};

export type Weather = {
  current: {
    temp: number;
    feels_like: number;
    pressure: number;
    wind_deg: number;
    wind_speed: number;
    weather: [
      {
        main: string;
      }
    ];
  };
  daily: Daily[];
};
