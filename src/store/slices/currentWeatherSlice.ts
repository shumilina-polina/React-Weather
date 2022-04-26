import { days } from "./../../pages/Home/components/Days/Days";
import { AxiosResponse } from "axios";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Daily {
  temp: {
    day: number;
    night: number;
  };
  weather: [{ main: string }];
}

export interface Weather {
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
}

interface Response {
  status: number;
  message: string;
}

interface CurrentWeatherState {
  weather: Weather;
  isLoading: boolean;
  response: Response;
}

const initialState: CurrentWeatherState = {
  weather: {
    current: {
      temp: 0,
      feels_like: 0,
      pressure: 0,
      wind_deg: 0,
      wind_speed: 0,
      weather: [
        {
          main: "Сlear",
        },
      ],
    },
    daily: [],
  },
  isLoading: false,
  response: {
    status: 0,
    message: "",
  },
};

for (let i = 0; i < days.length; i++) {
  initialState.weather.daily[i] = {
    temp: {
      day: 0,
      night: 0,
    },
    weather: [{ main: "" }],
  };
}

export const currentWeatherSlice = createSlice({
  name: "current_weather",
  initialState,
  reducers: {
    fetchCurrentWeather(state) {
      state.isLoading = true; //fetching data
    },
    fetchCurrentWeatherSuccess(
      state,
      action: PayloadAction<AxiosResponse<Weather>>
    ) {
      state.isLoading = false;
      state.weather = action.payload.data;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    fetchCurrentWeatherError(
      state,
      action: PayloadAction<AxiosResponse<Weather>>
    ) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
  },
});

export default currentWeatherSlice.reducer;
