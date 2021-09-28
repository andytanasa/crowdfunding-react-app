import styled, { css } from "styled-components";

const variantStyles = (theme, variant) =>
  ({
    primary: css`
      color: lightgray;
      background: ${theme.primary.cyan};
    `,
    secondary: css`
      color: black;
      background: lightgray;
      padding-left: 50px;
    `,
  }[variant]);

export const StyledButton = styled.button`
  width: 200px;
  padding: 20px 25px;
  border: none;
  font-size: 16px;
  transition: scale ease-in-out 2s;
  cursor: pointer;
  font-weight: 600;
  border-radius: 50px;
  position: relative;
  &:hover {
    transform: scale(0.98);
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
  }

  ${({ theme, variant }) => variantStyles(theme, variant)}
`;
