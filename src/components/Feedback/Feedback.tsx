import Button from "../../components/Button/Button";

import { FeedbackProps } from "./types";
import {
  FeedbackWrapper,
  FeedbackControl,
  ButtonWithCountContainer,
  Count,
} from "./styles";

function Feedback({
  likes,
  dislikes,
  onDislike,
  onLike,
  resetResults,
}: FeedbackProps) {
  return (
    <FeedbackWrapper>
      <FeedbackControl>
        <ButtonWithCountContainer>
          <Button name="Like" onClick={onLike} />
          <Count>{likes}</Count>
        </ButtonWithCountContainer>
        <ButtonWithCountContainer>
          <Button name="Dislike" onClick={onDislike} />
          <Count>{dislikes}</Count>
        </ButtonWithCountContainer>
      </FeedbackControl>
      <Button name="Reset Results" onClick={resetResults} />
    </FeedbackWrapper>
  );
}

export default Feedback;
