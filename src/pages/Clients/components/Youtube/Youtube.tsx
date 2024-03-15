import { useNavigate } from "react-router-dom";

import { YoutubeWrapper, YoutubePageTitle, ButtonControl } from "./styles";

import Button from "components/Button/Button";

function Apple() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <YoutubeWrapper>
      <YoutubePageTitle>
        YouTube, established in 2005, is the world's largest video-sharing
        platform, owned by Google. It allows users to upload, view, rate, share,
        and comment on videos, covering a vast array of topics from
        entertainment to education. With over 2 billion logged-in monthly users
        and over 500 hours of video uploaded every minute, YouTube has become an
        integral part of internet culture and a powerful tool for creators,
        businesses, and individuals to share their content with a global
        audience.
      </YoutubePageTitle>
      <ButtonControl>
        <Button name="Go Back" onClick={goBack} />
      </ButtonControl>
    </YoutubeWrapper>
  );
}

export default Apple;
