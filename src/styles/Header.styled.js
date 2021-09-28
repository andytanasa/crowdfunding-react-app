import styled from "styled-components";
export const StyledHeader = styled.header`
  width: 100%;
  max-width: 100%;
  height: 600px;
  background-color: red;
  background: url("./images/image-hero-desktop.jpg") no-repeat center center;
  background-size: cover;
  overflow: hidden;
`;

export const StyledNav = styled.nav`
  width: 1700px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const StyledLogo = styled.img`
  margin-top: 70px;
  width: 200px;
  height: 30px;
`;

export const StyledMenu = styled.ul`
  width: 300px;
  margin-top: 85px;
  background: inherit;
  color: white;
  display: flex;
  justify-content: space-between;
`;

export const StyledMenuList = styled.li`
  a {
    display: inline-block;
    text-decoration: none;
    color: white;
    transition: all 0.2s ease-in-out;
    :hover {
      color: gray;
      transform: scale(0.95);
    }
  }
`;
