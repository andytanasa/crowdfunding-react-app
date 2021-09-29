import React, { useState } from "react";
import {
  StyledMainHeaderContainer,
  StyledMainHeaderLogo,
  StyledMainHeaderH1,
  StyledMainHeaderPara,
} from "../../styles/main/MainHeaderContainer.styled";
import { StyledButton } from "../../styles/utils/ButtonStyled.styled";
import { Flex } from "../../styles/utils/Flex";

const MainHeaderContainer = () => {
  const [isBooked, setIsBooked] = useState(false);
  const onBooked = () => {
    setIsBooked(!isBooked);
    console.log(isBooked);
  };
  return (
    <StyledMainHeaderContainer>
      <StyledMainHeaderLogo src="./images/logo-mastercraft.svg" alt="" />
      <StyledMainHeaderH1>Mastercraft Bamboo Monitor Riser</StyledMainHeaderH1>
      <StyledMainHeaderPara>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </StyledMainHeaderPara>
      <Flex>
        <StyledButton variant="primary">Back this project</StyledButton>
        <StyledButton
          variant={isBooked ? "secondary" : "primary"}
          onClick={onBooked}
        >
          <img src="./images/icon-bookmark.svg" alt="bookmark icon" />
          {isBooked ? "Bookmark" : "Bookmarked"}
        </StyledButton>
      </Flex>
    </StyledMainHeaderContainer>
  );
};

export default MainHeaderContainer;
