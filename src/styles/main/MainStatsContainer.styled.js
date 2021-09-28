import styled from "styled-components";

export const StyledStatsContainer = styled.div`
  background-color: white;
  margin-top: 40px;
  border-radius: 10px;
  padding: 50px;
  & > div {
    margin-top: 30px;
    width: 100%;
    background-color: lightgray;
    border-radius: 20px;
    & > span {
      display: inline-block;
      width: 70%;
      height: 20px;
      background-color: ${({ theme }) => theme.primary.cyan};
      border-radius: 20px;
    }
  }
`;

export const StyledStatsList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  list-style: none;
`;

export const StyledStatsListItem = styled.li`
  width: 100%;
  height: 100%;
  & > h3 {
    margin-bottom: 20px;
  }
`;

export const VerticaleLine = styled.span`
  display: inline-block;
  border-left: 1px solid darkgray;
  width: 20px;
  height: 100px;
  transform: translate(70px, 0);
`;
