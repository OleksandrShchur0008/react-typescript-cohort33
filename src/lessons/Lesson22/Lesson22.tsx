import {
  ContainerWrapper,
  BlueContainer,
  RedContainer,
  GreenContainer,
  ButtonConrol,
  Lesson22Wrapper,
  PageTitle,
} from "./styles";
// import Button from "../../components/Button/Button";
import Button from "components/Button/Button";

function Lesson22() {
  // 1 способ стилизации: черех импорт styles.css файла - то что мы уже и так используем
  // 2 способ стилизации: inline - в атрибут style передаете ОБЪЕКТ со стилями
  // 3 cпособ стилизации: библиотека. Например: Emotion, styled-components

  return (
    <Lesson22Wrapper>
      {/* <p style={{color: 'blue', fontSize: "30px"}}>Lesson 22</p> */}
      <PageTitle isRed={false}>Lesson 22</PageTitle>
      <ButtonConrol>
        <Button type="button" name="Send" />
      </ButtonConrol>
      <ButtonConrol>
        <Button type="button" isRed={true} name="Delete" />
      </ButtonConrol>
      <ContainerWrapper>
        <GreenContainer>Green</GreenContainer>
        <RedContainer>Red</RedContainer>
        <BlueContainer>Blue</BlueContainer>
      </ContainerWrapper>
    </Lesson22Wrapper>
  );
}

export default Lesson22;
