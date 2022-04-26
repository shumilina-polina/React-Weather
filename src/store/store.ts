import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentWeatherSliceReducer from "./slices/currentWeatherSlice";
import cityOptionSliceReducer from "./slices/cityOptionSlice";

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];

const rootReducer = combineReducers({
  currentWeatherSliceReducer,
  cityOptionSliceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
