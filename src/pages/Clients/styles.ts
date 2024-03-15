import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const ClientsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const StyledLink = styled(NavLink)`
  font-size: 30px;
  font-weight: bold;
  margin: 20px;
  color: purple;
`;
