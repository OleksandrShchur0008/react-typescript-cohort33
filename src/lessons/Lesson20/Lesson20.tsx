function Lesson20() {
  // 1 тип string: Типизация строк - строки все что идет в дв-х, одинарных, литеральных кавычках
  let someString: string = "This is string";
  console.log(someString);
  someString = "This is changed string";
  console.log(someString);
  // someString = 5; // так делать нельзя - будет ошибка т.к 5 - это число, а someString - имеет тип данных string
  // let someString2: string = 10; - // так тоже делать нельзя - будет ошибка

  // 2 тип number
  let someNumber: number = 30; // number может быть целым числом
  console.log(someNumber);
  // someNumber = 30 + "5" // будет ошибка, т.к "5" - это строка
  let numberWithDot: number = 110.375; // number может быть с плавающей точкой
  console.log(numberWithDot);

  // 3 тип - boolean - только false или true
  let isActive: boolean = true;
  isActive = false;
  //   isActive = undefined // так нельзя - будет ошибка
  //   isActive = 0; // так нельзя - будет ошибка

  // 4 тип массивы - string[]
  const animals: string[] = ["Cat", "Dog", "Lion"];
  // animals.push(10000); //  - нельзя в аргумент класть тот тип данных, который не соответствует типом данных нашего массива
  const numbers: number[] = [2, 3, 4, 5];
  const numbers2 = [1, 2, 3, 4, 5];
  //   numbers2.push("6"); - будет ошибка

  // 4.1 тип tupel - [string,number] - позволяет создать массив фиксированной длинны, с определенным типом данных внутри - порядок данных важен!!!
  let arrayWithDifferentTypes: [string, string, number, boolean] = [
    "name",
    "John",
    3,
    true,
  ];

  return <div>Lesson 20</div>;
}

export default Lesson20;
