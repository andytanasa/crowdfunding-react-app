import { StyledNav } from "../styles/Header.styled";
import Logo from "./Logo";
import Menu from "./Menu";

const Nav = () => {
  return (
    <StyledNav>
      <Logo />
      <Menu />
    </StyledNav>
  );
};

export default Nav;
