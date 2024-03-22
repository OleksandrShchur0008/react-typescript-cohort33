import { useState, createContext } from "react";

import Section from "lessons/Lesson27/Section/Section";

import { MainWrapper, MainTitle } from "./styles";
import { UserData } from "./types";

// Создаем контекст
export const MainContext = createContext({
  fullName: "",
  age: 0,
  email: "",
});

function Main() {
  const [userData, setUserData] = useState<UserData>({
    fullName: "John Johnson",
    age: 32,
    email: "john_johnson@someemail.com",
  });

  return (
    // Оборачиваем все в MainContext.Provider и все что внутри него, будет иметь достп к клнтексту
    <MainContext.Provider value={userData}>
      <MainWrapper>
        <MainTitle>Main component</MainTitle>
        <Section />
      </MainWrapper>
    </MainContext.Provider>
  );
}

export default Main;