import { CityOption } from "../store/slices/cityOptionSlice";
import { Weather } from "./../store/slices/currentWeatherSlice";
import { AxiosResponse } from "axios";
import api from "./axios";

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
    let lat, lon;
    switch (city) {
      case CityOption.SaintPetersburg:
        lat = 59.93;
        lon = 30.33;
        break;
      case CityOption.Moscow:
        lat = 55.75;
        lon = 37.61;
        break;
      case CityOption.Novosibirsk:
        lat = 55.29;
        lon = 82.56;
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
