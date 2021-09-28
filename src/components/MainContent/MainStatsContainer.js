import React from "react";
import {
  StyledStatsContainer,
  StyledStatsList,
  StyledStatsListItem,
  VerticaleLine,
} from "../../styles/main/MainStatsContainer.styled";
import { StyledH3 } from "../../styles/utils/H3.styled";
import { StyledPara } from "../../styles/utils/Paragraph.styled";
const MainStatsContainer = () => {
  return (
    <StyledStatsContainer>
      <StyledStatsList>
        <StyledStatsListItem>
          <StyledH3>$89,914</StyledH3>
          <StyledPara>of $100,000 backed</StyledPara>
        </StyledStatsListItem>
        <StyledStatsListItem>
          <VerticaleLine />
        </StyledStatsListItem>
        <StyledStatsListItem>
          <StyledH3>5,007</StyledH3>
          <StyledPara>total backers</StyledPara>
        </StyledStatsListItem>
        <StyledStatsListItem>
          <VerticaleLine />
        </StyledStatsListItem>
        <StyledStatsListItem>
          <StyledH3>56</StyledH3>
          <StyledPara>days left</StyledPara>
        </StyledStatsListItem>
      </StyledStatsList>
      <div>
        <span></span>
      </div>
    </StyledStatsContainer>
  );
};

export default MainStatsContainer;
