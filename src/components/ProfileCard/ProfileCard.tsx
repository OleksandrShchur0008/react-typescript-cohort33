import { ProfileCardProps } from "./types";

import {
  ProfileCardContainer,
  ProfileAvatar,
  AvatarControl,
  FirstLastName,
  ProfileCardInfo,
} from "./styles";

function ProfileCard({
  profileData,
  imgSrc,
  children = <h1>User Card</h1>,
}: ProfileCardProps) {
  const normalizeFirstLastName = () => {
    return `${profileData.firstName} ${profileData.lastName}`;
  };

  return (
    <ProfileCardContainer>
      {children}
      <AvatarControl>
        <ProfileAvatar alt="Profile Avatar" src={imgSrc} />
      </AvatarControl>
      <FirstLastName>{normalizeFirstLastName()}</FirstLastName>
      <ProfileCardInfo>Career: {profileData.career}</ProfileCardInfo>
      <ProfileCardInfo>Hair Color: {profileData.hairColor}</ProfileCardInfo>
      <ProfileCardInfo>Hobby: {profileData.hobby}</ProfileCardInfo>
    </ProfileCardContainer>
  );
}

export default ProfileCard;
