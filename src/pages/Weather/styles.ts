import styled from "@emotion/styled";

import { WeatherImg } from "assets";

export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: url(${WeatherImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid whitesmoke;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.1) 100%
    ),
    rgba(18, 45, 77, 0.5);
  backdrop-filter: blur(8.899999618530273px);
`;

export const HeaderTitle = styled.p`
  font-size: 24px;
  color: white;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  flex: 1;
`;

export const WeatherForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 710px;
  gap: 50px;
  margin-top: 100px;
`;

export const Loading = styled.p`
  font-size: 32px;
  font-weight: bold;
  color: white;
`;

export const InputButtonWrapper = styled.div`
  display: flex;
  width: 710px;
  gap: 14px;
`;

export const InputComponent = styled.input`
  width: 550px;
  padding: 10px;
  font-size: 18px;
  color: white;
  background: rgba(18, 45, 77, 0.5);
  border-radius: 50px;
  border: 1px solid whitesmoke;
`;

export const SearchButtonComponent = styled.div`
  width: 160px;
`;
