import { StyledMenu, StyledMenuList } from "../styles/Header.styled";

const Menu = () => {
  return (
    <StyledMenu>
      <StyledMenuList>
        <a href="/"> About</a>
      </StyledMenuList>
      <StyledMenuList>
        {" "}
        <a href="/"> Discovery</a>
      </StyledMenuList>
      <StyledMenuList>
        {" "}
        <a href="/"> Get Started</a>
      </StyledMenuList>
    </StyledMenu>
  );
};

export default Menu;
