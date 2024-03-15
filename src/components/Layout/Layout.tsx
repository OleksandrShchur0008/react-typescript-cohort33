import { LayoutProps } from "./types";
import { useNavigate } from "react-router-dom";
import {
  Header,
  LayoutWrapper,
  HeaderLogoContainer,
  HeaderLogo,
  HeaderNavContainer,
  Main,
  Footer,
  FooterLogoContainer,
  FooterLogo,
  FooterNavContainer,
  StyledNavLink,
} from "./styles";

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };
  return (
    <LayoutWrapper>
      <Header>
        <HeaderLogoContainer onClick={goToHomePage}>
          <HeaderLogo />
        </HeaderLogoContainer>
        <HeaderNavContainer>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/"
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/users"
          >
            Users
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/clients"
          >
            Clients
          </StyledNavLink>

          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/about"
          >
            About
          </StyledNavLink>
        </HeaderNavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <FooterLogoContainer onClick={goToHomePage}>
          <FooterLogo />
        </FooterLogoContainer>
        <FooterNavContainer>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/users">Users</StyledNavLink>
          <StyledNavLink to="/clients">Clients</StyledNavLink>
          <StyledNavLink to="/about">About</StyledNavLink>
        </FooterNavContainer>
      </Footer>
    </LayoutWrapper>
  );
}

export default Layout;
