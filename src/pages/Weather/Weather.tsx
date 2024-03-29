import { ChangeEvent, useState } from "react";

import WeatherError from "./components/WeatherError/WeatherError";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";

import Button from "components/Button/Button";

import { WeatherInfoData, WeatherErrorData } from "./types";

import {
  WeatherWrapper,
  Header,
  HeaderTitle,
  Main,
  WeatherForm,
  InputButtonWrapper,
  InputComponent,
  SearchButtonComponent,
  Loading,
} from "./styles";

function Weather() {
  const [city, setCity] = useState<string>();

  const [weatherInfo, setWeatherInfo] = useState<WeatherInfoData | undefined>(
    undefined
  );
  // В этом стейте будут зраниться данные об ошибке, которая нам пришли с сервера
  const [weatherError, setWeatherError] = useState<
    WeatherErrorData | undefined
  >(undefined);
  // isLoading нам нужен как индикатор загрузки, чтобы мы его показывали в момент ожиданиия данных по сети
  const [isLoading, setLoading] = useState<boolean>(false);
  // APP_ID у каждого свой, найти его на можно на сайте у себя

  const API_KEY: string = "979edff3233b7dcd191169398f90aa75";
  const URL: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  const onChangeCity = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  //Главная функция кнопки
  const getWeatherInfo = async () => {
    //1. Проверяем пустой ли наш инпут если да то даем алерт
    if (city?.trim().length === 0) {
      return alert("Enter city name");
    }

    //2. очищаем 2 стейта weatherInfo и weatherError, т.к при каждом новом запросе
    // нужно скрывать контейнеры со старой инфорацией об ошибке или погоде
    setWeatherInfo(undefined);
    setWeatherError(undefined);
    //т.к у нас начинается запрос, мы показыаем индикатор загрузки
    setLoading(true);

    //3. Если все прошло хорошо, делаем запрос на openweatherapp
    const response = await fetch(URL); //приходит статус ошибки либо ok
    const data = await response.json(); //преобразует наш статус в читабельный JS

    //ТУТ ПРОФИССИОНАЛЬНЫЕ БУДЕТ ИСПОЛЬЗОВАТЬ БЛОК try{} catch() {}

    //4. Если ok = true показываем информацию о погоде, иначе показываем ошибку
    if (response.ok) {
      setLoading(false);
      setWeatherInfo({
        temp: `${Math.round(data.main.temp - 273.15)}°`,
        icon: `http://openweathermap.org/img/w/${data?.weather[0]?.icon}.png`,
        cityName: `${data.name}`,
      });
    } else {
      // Тут пишем логику работы с ошибкой
      setLoading(false);
      setWeatherError({ cod: data.cod, message: data.message });
    }
  };

  return (
    <WeatherWrapper>
      <Header>
        <HeaderTitle>Weather app</HeaderTitle>
      </Header>
      <Main>
        <WeatherForm>
          <InputButtonWrapper>
            <InputComponent
              id="weather_input_id"
              name="weather_input_name"
              placeholder="Colorado"
              value={city}
              onChange={onChangeCity}
            />
            <SearchButtonComponent>
              <Button type="button" name="Search" onClick={getWeatherInfo} />
            </SearchButtonComponent>
          </InputButtonWrapper>
          {isLoading && <Loading>Loading...</Loading>}
          {!!weatherInfo && (
            <WeatherInfo
              temp={weatherInfo.temp}
              icon={weatherInfo.icon}
              cityName={weatherInfo.cityName}
            />
          )}
          {!!weatherError && <WeatherError error={weatherError} />}
        </WeatherForm>
      </Main>
    </WeatherWrapper>
  );
}

export default Weather;
