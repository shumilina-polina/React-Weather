import { AppDispatch, RootState } from "./../store/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const useCustomDispatch = () => {
  return useDispatch<AppDispatch>();
};

export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;
