import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { UserLogo } from "assets";
import { colors } from "styles/colors";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: fit-content;
  background-color: ${colors.secondaryPrimary};
`;

export const HeaderLogoContainer = styled.div`
  width: 50px;
  height: 50px;
  margin-left: 20px;
  cursor: pointer;
`;

export const HeaderLogo = styled.img`
  width: 100%;
  height: 100%;
`;

HeaderLogo.defaultProps = { src: UserLogo };

export const HeaderNavContainer = styled.nav`
  display: flex;
  gap: 10px;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: 180px;
  background-color: ${colors.secondaryPrimary};
  color: white;
`;

export const FooterLogoContainer = styled.div`
  width: 60px;
  height: 60px;
  margin-left: 25px;
  cursor: pointer;
`;

export const FooterLogo = styled.img`
  width: 100%;
  height: 100%;
`;

FooterLogo.defaultProps = { src: UserLogo };

export const FooterNavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 24px;
  padding-right: 15px;
  color: white;
`;
