import { useState, ChangeEvent } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import { LoginFormValues } from "./types";

import { LoginFormWrapper, LoginFormTitle, InputsContainer } from "./styles";

function LoginForm() {
  const schema = Yup.object().shape({
    email: Yup.string().required("Email is Requiered"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    } as LoginFormValues,
    validationSchema: schema,
    onSubmit: (values: LoginFormValues) => {
      console.log(values);

      //ПРИМЕР ТОГО КАК ОТПРАВЛЯТЬ ДАННЫЕ ИЗ ФОРМЫ НА СЕРВЕР + async после onSubmit: async (values....)
      // const response = await fetch("url", {
      //   method: "POST",
      //   body: JSON.stringify(values),
      // });
    },
  });

  // const [emailValue, setEmailValue] = useState<string>("");
  // const [passwordValue, setPasswordValue] = useState<string>("");

  // const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPasswordValue(event.target.value);
  // };

  // const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
  //   setEmailValue(event.target.value);
  // };

  return (
    // <LoginFormWrapper onSubmit={(event: any) => event.preventDefault();}>
    //(БЕЗ-ФОРМИКА) ПОЗВОЛЯЕТ ПРИ НАЖАТИИ НА КНОПКУ НЕ ПЕРЕЗАГРУЖАТЬ СТРАНИЦУ И СОХРАНЯТЬ ДАННЫЕ ПРИ САБМИТТЕ
    // УБИРАЕТ СТАНДАРТНОЕ ПОВЕДЕНИЕ У БРАУЗЕРА
    <LoginFormWrapper onSubmit={formik.handleSubmit}>
      <LoginFormTitle>Login form</LoginFormTitle>
      <InputsContainer>
        <Input
          id="login-email"
          placeholder="Enter your email"
          name="email"
          label="Email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
        />
        <Input
          id="login-password"
          placeholder="Enter your password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
        />
      </InputsContainer>
      <Button name="Login" type="submit" />
    </LoginFormWrapper>
  );
}

export default LoginForm;
