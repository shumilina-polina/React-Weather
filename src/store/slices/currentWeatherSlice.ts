import { AxiosResponse } from "axios";
import { Weather } from "./../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Response = {
  status: number;
  message: string;
};

type CurrentWeather = {
  weather: Weather;
  isLoading: boolean;
  response: Response;
};

const initialState: CurrentWeather = {
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
  },
  isLoading: false,
  response: {
    status: 0,
    message: "",
  },
};

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
