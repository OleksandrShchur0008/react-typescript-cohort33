import { useState, useEffect } from "react";

import Input from "components/Input/Input";

import { Lesson24Wrapper, CatFactCard, CatFact } from "./styles";

function Lesson24() {
  const [inputValue, setInputValue] = useState<string>("");
  const [catFact, setCatFact] = useState<string>("");

  // Создадим функцию, которая будет вызывать GET запрос для получения фактов о котах
  const getCatFact = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const result = await response.json();
      console.log(result);

      if (!response.ok) {
        // Если статус ответа не в пределах 200-299, считаем это ошибкой
        // и гененируем ее таким образом, чтобы отдать result блоку catch
        throw Object.assign(new Error("API Error"), {
          response: result,
        });
      } else {
        setCatFact(result.fact);
      }
    } catch (error) {
      //Тут обрабатываются ошибки
      console.log(error);
    }
  };

  // 1 метод - mounting(первичное отображение DOM элементов)
  // Тут нужно делать действия, которые вы хотите выполнить только вначале
  // Напимер: как только вы открывете страницу с данными пользователя, послать запрос на бэкенд, чтобы эти данные отобразить
  useEffect(() => {
    console.log("Mounting lifecycle method");
    // alert("Mounting lifecycle method")

    getCatFact();
  }, []);

  // 2 метод - update(вызывается при перерндеренге компонента)
  // Тут нужно делать действия, которые вы хотите выполнить при перерендеринге(измения state, props, context)
  // Напимер: нам нужно посылать запрос, каждый раз, когда мы вводим букву в клавиатуре
  useEffect(() => {
    console.log("Updating lifecycle method");

    if (!!catFact) {
      getCatFact();
    }
  }, [inputValue]);

  // 3 метод - unmounting(вызывается, при удалении компонента из DOM)
  // Тут можно например: чистить данные из localstorage или Redux store
  useEffect(() => {
    return () => console.log("Unmointing lifecycle method");
  }, []);

  return (
    <Lesson24Wrapper>
      <CatFactCard>
        <Input
          id="test_id1"
          name="searchInfo"
          placeholder="Enter text"
          label="Search"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <CatFact>{catFact}</CatFact>
      </CatFactCard>
    </Lesson24Wrapper>
  );
}

export default Lesson24;
