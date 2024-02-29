import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Lesson23Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
`;

export const ContainerWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

// Создаем шаблон для создания 3 разных контейнеров
const commonBoxStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  border: 1px solid black;
  padding: 10px;
  color: white;
`;

// Передаем каждому боксу commonBoxStyles
export const BoxBlueContainer = styled.div`
  ${commonBoxStyles};
  background-color: blue;
`;

export const BoxRedContainer = styled.div`
  ${commonBoxStyles};
  background-color: red;
`;

export const BoxGreenContainer = styled.div`
  ${commonBoxStyles};
  background-color: green;
`;

export const InputComponent = styled.input`
  width: 200px;
`;
