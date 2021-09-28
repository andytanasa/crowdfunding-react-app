import React from "react";
import { StyledHeader } from "../styles/Header.styled";
import Nav from "./Nav";

const Header = () => {
  return (
    <StyledHeader>
      <Nav />
    </StyledHeader>
  );
};

export default Header;
