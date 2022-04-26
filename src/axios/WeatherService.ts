import { Weather } from './../store/slices/currentWeatherSlice';
import { AxiosResponse } from "axios";
import api from "./axios";

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
    let lat, lon;
    switch (city) {
      case "saint petersburg":
        lat = 59.934;
        lon = 30.33;
        break;

      default:
        lat = 59.934;
        lon = 30.33;
        break;
    }
    return api.get<Weather>(`/onecall?lat=${lat}&lon=${lon}`);
    // return api.get<Weather>(`/weather?q=${city}`);
  }
}
