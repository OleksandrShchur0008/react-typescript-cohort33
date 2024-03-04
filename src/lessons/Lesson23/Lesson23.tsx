import { useState, ChangeEvent } from "react";

import LoginForm from "components/LoginForm/LoginForm";

import {
  Lesson23Wrapper,
  ContainerWrapper,
  BoxBlueContainer,
  BoxGreenContainer,
  BoxRedContainer,
  InputComponent,
} from "./styles";

function Lesson23() {
  // В этом стейте мы будем хранить значение для инпута в inputValue,
  // а изменять это значение будем с помощью setInputValue,
  // таким образом, наш инпут станет контролируемым
  const [inputValue, setInputValue] = useState<string>("");

  console.log(inputValue);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <Lesson23Wrapper>
      <ContainerWrapper>
        <BoxBlueContainer>Blue box</BoxBlueContainer>
        <BoxGreenContainer>Green box</BoxGreenContainer>
        <BoxRedContainer>Red box</BoxRedContainer>
      </ContainerWrapper>
      <InputComponent
        onChange={onChangeInput}
        value={inputValue}
        placeholder="Enter something"
      />
      <LoginForm />
    </Lesson23Wrapper>
  );
}

export default Lesson23;
