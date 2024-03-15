import { useNavigate } from "react-router-dom";

import { AITPageTitle, AITWrapper, ButtonControl } from "./styles";

import Button from "components/Button/Button";

function AIT() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <AITWrapper>
      <AITPageTitle>
        The AIT (Architectural Institute in Theory) in Berlin School is a
        renowned institution offering advanced education and research
        opportunities in architecture and design. Founded in 1994, it emphasizes
        theoretical and practical aspects of architecture, urbanism, and related
        fields. Known for its innovative approach and international faculty, AIT
        Berlin School attracts students from around the world seeking to advance
        their knowledge and skills in the built environment.
      </AITPageTitle>
      <ButtonControl>
        <Button name="Go Back" onClick={goBack} />
      </ButtonControl>
    </AITWrapper>
  );
}

export default AIT;
