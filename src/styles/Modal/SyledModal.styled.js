import styled from "styled-components";

export const StyledModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  margin: 0 auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  & > div {
    border-radius: 10px;
    background-color: #fefefe;
    margin: 15% auto;
    padding: 40px;
    width: 1200px;
  }
  & > div > svg {
    position: relative;
    top: -40px;
    right: -1100px;
    cursor: pointer;
    &:hover {
      transform: scale(0.95);
      color: red;
    }
  }
`;

export const CardModalContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 30px;
  border: 1px solid lightgray;
  border-radius: 10px;
  margin-top: 30px;
  position: relative;
  & > input {
    color: ${({ theme }) => theme.primary.cyan};
    width: 20px;
    height: 20px;
    outline: none;
    border-radius: 50%;
  }
  & > label {
    color: ${({ theme }) => theme.primary.cyan};
    padding-left: 30px;
  }
  & > p {
    line-height: 2;
    padding-left: 50px;
    margin-top: 20px;
  }
  & > span {
    width: 100px;
    display: inline-block;
    position: absolute;
    top: 20px;
    right: 0;
  }
`;
