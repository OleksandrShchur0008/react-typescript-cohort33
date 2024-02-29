import { useState, ChangeEvent } from "react";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import { LoginFormWrapper, LoginFormTitle, InputsContainer } from "./styles";

function LoginForm() {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value);
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  };

  return (
    <LoginFormWrapper>
      <LoginFormTitle>Login form</LoginFormTitle>
      <InputsContainer>
        <Input
          id="login-email"
          placeholder="Enter your email"
          name="email"
          label="Email"
          type="email"
          value={emailValue}
          onChange={onChangeEmail}
        />
        <Input
          value={passwordValue}
          onChange={onChangePassword}
          id="login-password"
          placeholder="Enter your password"
          name="password"
          label="Password"
          type="password"
        />
      </InputsContainer>
      <Button name="Login" />
    </LoginFormWrapper>
  );
}

export default LoginForm;
