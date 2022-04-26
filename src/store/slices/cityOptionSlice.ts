import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum CityOption {
  SaintPetersburg = "saint petersburg",
  Moscow = "moscow",
  Novosibirsk = "novosibirsk",
}

interface CityOptionState {
  cityName: string;
}

const initialState: CityOptionState = {
  cityName: CityOption.SaintPetersburg,
};

export const cityOptionSlice = createSlice({
  name: "city_option",
  initialState,
  reducers: {
    changeCityOption(state, action: PayloadAction<string>) {
      state.cityName = action.payload;
    },
  },
});

export default cityOptionSlice.reducer;
