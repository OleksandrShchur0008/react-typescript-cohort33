import { WeatherErrorProps } from "./types";
import { ApiError, ErrorMessage, WeatherErrorWrapper } from "./styles";

function WeatherError({ error }: WeatherErrorProps) {
  return (
    <WeatherErrorWrapper>
      <ApiError>{`API Error ${error.cod}`}</ApiError>
      <ErrorMessage>{error.message}</ErrorMessage>
    </WeatherErrorWrapper>
  );
}

export default WeatherError;
