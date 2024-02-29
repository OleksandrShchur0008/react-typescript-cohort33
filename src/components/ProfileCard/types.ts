import { ReactNode } from "react";

interface ProfileData {
  firstName: string;
  lastName: string;
  career: string;
  hairColor: string;
  hobby: string;
}

export interface ProfileCardProps {
  profileData: ProfileData;
  imgSrc: string;
  children?: ReactNode;
}
