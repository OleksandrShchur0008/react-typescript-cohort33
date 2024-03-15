import { ClientsWrapper, StyledLink } from "./styles";

function Clients() {
  return (
    <ClientsWrapper>
      <StyledLink to="ait">AIT</StyledLink>
      <StyledLink to="apple">Apple</StyledLink>
      <StyledLink to="youtube">Youtube</StyledLink>
    </ClientsWrapper>
  );
}

export default Clients;
