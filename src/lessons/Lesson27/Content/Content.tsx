import { useContext } from "react";
import { MainContext } from "lessons/Lesson27/Main/Main";

import { ContentWrapper, ContentInfo, ContentTitle } from "./styles";

function Content() {
  // Получаем данные из контекста
  const userData = useContext(MainContext);

  const { fullName, age, email } = userData;

  return (
    <ContentWrapper>
      <ContentTitle>Content component</ContentTitle>
      <ContentInfo>Full name: {fullName}</ContentInfo>
      <ContentInfo>Age: {age}</ContentInfo>
      <ContentInfo>Email: {email}</ContentInfo>
    </ContentWrapper>
  );
}

export default Content;