import { useState } from "react";

import Feedback from "components/Feedback/Feedback";

import "./styles.css";

function Homework21() {
  // Создаем state для likes
  const [likes, setLikes] = useState<number>(0);
  // Создаем state для dislikes
  const [dislikes, setDislikes] = useState<number>(0);

  // Создаем функцию, которая будет увеличивать likes на 1
  const onLike = (): void => {
    setLikes((prevValue) => {
      return prevValue + 1;
    });
  };

  // Создаем функцию, которая будет увеличивать dislikes на 1
  const onDislike = (): void => {
    setDislikes((prevValue) => prevValue + 1);
  };

  // Создаем функцию, которая будет сбрасывать все результаты
  const resetResults = (): void => {
    setLikes(0);
    setDislikes(0);
  };

  // Дженерики
  // 1
  type CustomArrayType<Type = string> = Type[]; // Type может быть string, number, boolean, какой-то обьект
  // const stringsArray: string[] = ["Cat", "Dog", "Lion"];
  // const booleanArray: boolean[] = [true, true, false];
  const stringsArray: CustomArrayType<string> = ["Cat", "Dog", "Lion"];
  const booleanArray: CustomArrayType<boolean> = [true, true, false];
  const stringArray2: CustomArrayType = ["Car", "Bus"];

  // 2
  type MyTupel<Type1, Type2, Type3> = [Type1, Type2, Type3];
  const array1: MyTupel<string, boolean, number> = ["someString", true, 100];
  const array2: MyTupel<string, string, string> = [
    "someString1",
    "someString2",
    "someString3",
  ];

  // 3 создание обьектов на основании дженериков

  // До Дженерика
  // interface Object1 {
  //   key: string;
  //   value: string;
  // }

  // interface Object2 {
  //   key: string;
  //   value: number;
  // }

  // const object1: Object1 = {
  //   key: "name",
  //   value: "Brat",
  // };

  // const object2: Object2 = {
  //   key: "age",
  //   value: 32,
  // };

  // C использованием дженерика
  interface CustomObject<Value> {
    key: string;
    value: Value;
  }

  const object1: CustomObject<string> = {
    key: "name",
    value: "Brat",
  };

  const object2: CustomObject<number> = {
    key: "age",
    value: 32,
  };

  return (
    <div className="homework21-wrapper">
      <Feedback
        onDislike={onDislike}
        onLike={onLike}
        resetResults={resetResults}
        likes={likes}
        dislikes={dislikes}
      />
    </div>
  );
}

export default Homework21;
