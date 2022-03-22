import { createSlice } from "@reduxjs/toolkit";

type Response = {
  status: number;
  message: string;
};

type CurrentWeather = {
  weather: any;
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
    fetchCurrentWeatherSuccess(state,action:any) {
        // state.weather =action.;
    },
  },
});
