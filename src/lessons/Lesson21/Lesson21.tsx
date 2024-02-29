import Counter from "../../components/Counter/Counter";

import { useState } from "react";

function Lesson21() {
  // Продолжаем изучать TS
  // 6. null и undefined
  let someValue: undefined = undefined;
  //   someValue = null; // - будет ошибка
  //   someValue = "someString"; // - будет ошибка
  let emptyValue: null = null;

  // 7. Типизация функций
  // 7.1 Если функция ничего не возвращает
  // 1 способ типизации ф-ии
  //   const someFunction1 = (): void => {
  //     console.log("Hello world");
  //   };
  // 2 способ типизации ф-ии
  //   const someFunction1: () => void = () => {
  //     console.log("Hello world");
  //   };

  // 7.2 Если функция что-то возвращает
  const concatStrings = (firstName: string, lastName: string): string => {
    return `${firstName} ${lastName}`;
  };

  const concatString = (
    firstName: string,
    lastName: string,
    age: number,
    job: string
  ): [string, string, number, string] => {
    return [firstName, lastName, age, job];
  };

  // 8. Тип any
  let value1: any = "Some value";
  value1 = 3;
  value1 = [1, 2, 3, 4, 5];

  // 9. enum
  enum WEATHER_CODES {
    SQ = "SQ",
    PO = "PO",
    FC = "FC",
    BR = "BR",
    HZ = "HZ",
    FU = "FU",
    DS = "DS",
    SS = "SS",
  }

  console.log(WEATHER_CODES.SQ);

  const decode = (codeOfWeather: WEATHER_CODES): string => {
    switch (codeOfWeather) {
      case WEATHER_CODES.SQ:
        return "шквал";
      case WEATHER_CODES.PO:
        return "пыльный вихрь";
      case WEATHER_CODES.FC:
        return "торнадо";
      case WEATHER_CODES.BR:
        return "дымка (видимость от 1 до 9 км)";
      case WEATHER_CODES.HZ:
        return "мгла (видимость менее 10 км)";
      case WEATHER_CODES.FU:
        return "дым (видимость менее 10 км)";
      case WEATHER_CODES.DS:
        return "пыльная буря (видимость менее 10 км)";
      case WEATHER_CODES.SS:
        return "песчаная буря (видимость менее 10 км) ";
      default:
        return "Неверный код погоды!";
    }
  };

  decode(WEATHER_CODES.SQ);
  //   decode("BR"); // так делать нельзя - будет ошибка

  // 10 типизация обьектов: interface и type
  //10.1 interface
  interface User {
    name: string;
    age: number;
    job: string;
    isActive?: boolean;
  }

  interface User_Additional extends User {
    isManager: boolean;
  }

  const user: User = {
    name: "John",
    age: 50,
    job: "QA",
  };

  const user1: User_Additional = {
    name: "John",
    age: 50,
    job: "QA",
    isManager: false,
    isActive: true,
  };

  //10.2 type
  type Animal = {
    name: string;
    color: string;
  };

  type Animal_Additional = {
    // нельзя наследовать другие type
    isWild: boolean;
  };

  type Color = string;

  const color: Color = "Red";
  const animal: Animal = {
    name: "Cat",
    color: "black",
  };

  // 11. ИЛИ  в ts
  type CustomType = string | undefined | null;
  let someDataFromServer: CustomType = undefined;
  someDataFromServer = "Some data";
  someDataFromServer = null;
  //   someDataFromServer = 3; // будет ошибка т.к CustomType не может быть числом

  // Управление состоянием дочернего компонента в родительском компоненте

  // Создаем state для нашего Counter
  const [count, setCount] = useState<number>(0);

  // Создаем функцию, которая будет увеличивать наш count на 1
  const onPlus = () => {
    setCount((prevValue) => {
      return prevValue + 1;
    });
  };

  // Создаем функцию, которая будет уменьшать наш count на 1
  const onMinus = () => {
    setCount((prevValue) => prevValue - 1);
  };
  return (
    <div>
      Lesson 21: Typescript
      <Counter count={count} onMinus={onMinus} onPlus={onPlus} />
    </div>
  );
}

export default Lesson21;
