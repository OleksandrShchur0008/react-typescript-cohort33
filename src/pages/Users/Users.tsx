import { useNavigate } from "react-router-dom";

import { UsersWrapper, UsersPageTitle, ButtonControl } from "./styles";

import Button from "components/Button/Button";

function Users() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };
  return (
    <UsersWrapper>
      <UsersPageTitle>Users</UsersPageTitle>
      <ButtonControl>
        <Button name="Go to Home Page" onClick={goToHomePage} />
      </ButtonControl>
    </UsersWrapper>
  );
}

export default Users;
