import styled from "@emotion/styled";

import { colors } from "styles/colors";

export const Homework24Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 20px;
  background-color: wheat;
`;

export const TextCardTitle = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
  font-style: oblique;
  color: ${colors.secondaryBlue};
`;

export const RandomJokeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  min-height: 300px;
  border: 3px solid ${colors.secondaryBlue};
  background-color: ${colors.primary};
  box-shadow: 0 2px 20px;
  border-radius: 20px;
  padding: 40px;
  gap: 40px;
`;

export const JokeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const RandomJoke = styled.h6`
  font-size: 30px;
  line-height: 1.8;
  color: royalblue;
`;

export const Button = styled.button`
  cursor: pointer;
`;
