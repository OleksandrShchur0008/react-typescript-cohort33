import { useNavigate } from "react-router-dom";

import { AppleWrapper, ApplePageTitle, ButtonControl } from "./styles";

import Button from "components/Button/Button";

function Apple() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <AppleWrapper>
      <ApplePageTitle>
        Apple Inc. epitomizes innovation and elegance, crafting revolutionary
        products since its founding in 1976. From the Macintosh to the iPhone,
        each device seamlessly blends cutting-edge technology with minimalist
        design, setting industry standards. With a commitment to sustainability
        and a loyal global following, Apple continues to inspire creativity and
        shape the future of technology.
      </ApplePageTitle>
      <ButtonControl>
        <Button name="Go Back" onClick={goBack} />
      </ButtonControl>
    </AppleWrapper>
  );
}

export default Apple;
