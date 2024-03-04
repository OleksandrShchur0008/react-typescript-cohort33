import { useState, ChangeEvent } from "react";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { Homework22Wrapper, ButtonsContiner, InputsContainer } from "./styles";

function Homework22() {
  const [inputValue1, setInputValue1] = useState<string>("");
  const [inputValue2, setInputValue2] = useState<string>("");

  const onChangeInput1 = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue1(event.target.value);
  };

  const onChangeInput2 = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue2(event.target.value);
  };

  return (
    <Homework22Wrapper>
      <ButtonsContiner>
        <Button name="Send" />
        {/* Если вы передаете пропсу boolean без явного указания false или true, она автоматически становится true. Например: передать isRed, тоже самое что и передать isRed={true} */}
        <Button name="Delete" isRed />
        {/* <Button name="Delete" isRed={true} /> */}
        <Button name="Disable button" disabled />
      </ButtonsContiner>
      <InputsContainer>
        <Input
          value={inputValue1}
          onChange={onChangeInput1}
          label="Simple input"
          name="simpleInput"
          id="simple-input"
          placeholder="Enter your name"
        />
        <Input
          value={inputValue2}
          onChange={onChangeInput2}
          label="Disabled input"
          name="disabledInput"
          id="disabled-input"
          placeholder="Enter your name"
          disabled
        />
      </InputsContainer>
    </Homework22Wrapper>
  );
}

export default Homework22;
