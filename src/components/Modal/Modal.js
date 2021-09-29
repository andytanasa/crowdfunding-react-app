import React from "react";
import { StyledModalContainer } from "../../styles/Modal/SyledModal.styled";
import { StyledPara } from "../../styles/utils/Paragraph.styled";
import CardModal from "./CardModal";
import { FaMixer } from "react-icons/fa";
const text = {
  firstCardText:
    "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive ypdates via email.",
  secondCardText:
    "You get an ergonomic stand made of natyral bamboo. You've helped us lunch our promotional campaign, and you'll be added to a special Backer member list.",
  thirdCardText:
    "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
  forthCardText: "You get two Special Edition Mahogany stands ",
};

const Modal = ({ onShowModal, showModal }) => {
  const handleModal = () => {
    onShowModal(!showModal);
  };
  return (
    <StyledModalContainer>
      <div>
        <h3>Back this project</h3>
        <FaMixer onClick={handleModal} />
        <StyledPara>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </StyledPara>
        <CardModal
          name="noReward"
          title="Pledge with no reward"
          text={text.firstCardText}
        />
        <CardModal
          name="pledge25"
          title="Bamboo Stand"
          span=" Pledge $25 or more"
          price="101"
          text={text.secondCardText}
        />
        <CardModal
          name="pledge75"
          title="Black Edition Stand"
          span="Pledge $75 or more"
          price="64"
          text={text.thirdCardText}
        />
        <CardModal
          name="customPledge"
          title="Mahogany Special Edition"
          span="Pledge $200 or more"
          price="0"
          text={text.forthCardText}
        />
      </div>
    </StyledModalContainer>
  );
};

export default Modal;
