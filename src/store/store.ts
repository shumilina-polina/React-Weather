import { currentWeatherSlice } from "./slices/currentWeatherSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentWeatherSliceReducer from "./slices/currentWeatherSlice";

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];

const rootReducer = combineReducers({
  currentWeatherSliceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
