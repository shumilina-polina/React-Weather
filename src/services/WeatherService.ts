import { Weather } from './../store/types';
import axios, { AxiosResponse } from "axios";

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
    return axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=55b318e7cc05f138a7c6d76d463c5c3a`
    );
  }
}
