import styled from "styled-components";

export const StyledMainContentContainer = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 10px;
  margin-top: 40px;
  padding: 50px;
  & > h3 {
    font-size: 25px;
    margin-bottom: 30px;
  }
  & > p {
    line-height: 2;
    font-size: 1.6rem;
    margin-bottom: 30px;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  & > :last-child {
    opacity: 0.5;
    & button {
      background-color: gray;
    }
  }
`;

export const Card = styled.div`
  width: 100%;
  border: 1px solid darkgray;
  padding: 50px;
  margin-bottom: 40px;
  border-radius: 10px;
  & > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    & > h3 {
      font-size: 1.8rem;
    }
    & > span {
      color: ${({ theme }) => theme.primary.cyan};
      font-weight: bolder;
    }
  }
  & > p {
    line-height: 2;
    font-size: 1.2rem;
  }
  & > footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    & > p {
      font-size: 2rem;
      font-weight: bolder;
      color: black;
      display: flex;
      align-items: center;

      & > span {
        color: gray;
        font-size: 1rem;
        padding-left: 10px;
      }
    }
  }
`;
