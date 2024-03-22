import Message from "../Message/Message";

import { CardWrapper, BlogName } from "./styles";

function Card() {
  return (
    <CardWrapper>
      <BlogName>John Johnson</BlogName>
      <Message />
    </CardWrapper>
  );
}

export default Card;
