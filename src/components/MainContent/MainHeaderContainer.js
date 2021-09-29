import React from "react";
import {
  StyledMainHeaderContainer,
  StyledMainHeaderLogo,
  StyledMainHeaderH1,
  StyledMainHeaderPara,
} from "../../styles/main/MainHeaderContainer.styled";
import { StyledButton } from "../../styles/utils/ButtonStyled.styled";
import { Flex } from "../../styles/utils/Flex";

const MainHeaderContainer = ({
  onHandleBooked,
  isBooked,
  showModal,
  onShowModal,
}) => {
  const onBooked = (isBooked) => {
    onHandleBooked(!isBooked);
    // console.log(isBooked);
  };
  const onHandleModal = (showModal) => {
    onShowModal(!showModal);
  };
  return (
    <StyledMainHeaderContainer>
      <StyledMainHeaderLogo src="./images/logo-mastercraft.svg" alt="" />
      <StyledMainHeaderH1>Mastercraft Bamboo Monitor Riser</StyledMainHeaderH1>
      <StyledMainHeaderPara>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </StyledMainHeaderPara>
      <Flex>
        <StyledButton variant="primary" onClick={onHandleModal}>
          Back this project
        </StyledButton>
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
