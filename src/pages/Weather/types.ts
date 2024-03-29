//Здесь мы типизируем все необходимое нам, на основе того
//что приходит нам с бэкенда (Узнаем с помощью console.log(data))

export interface WeatherInfoData {
  temp: string;
  icon: string;
  cityName: string;
}

export interface WeatherErrorData {
  cod: string;
  message: string;
}
