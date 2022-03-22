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
  weather: {},
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

export default currentWeatherSlice.reducer
