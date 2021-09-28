import React from "react";
import {
  Card,
  CardContainer,
  StyledMainContentContainer,
} from "../../styles/main/MainStyledContentContainer";
import { StyledH3 } from "../../styles/utils/H3.styled";
import { StyledPara } from "../../styles/utils/Paragraph.styled";
import { StyledButton } from "../../styles/utils/ButtonStyled.styled";

const MainContentContainer = () => {
  return (
    <StyledMainContentContainer>
      <StyledH3>About this project</StyledH3>
      <StyledPara>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </StyledPara>
      <StyledPara>
        {" "}
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </StyledPara>
      <CardContainer>
        <Card>
          <header>
            <StyledH3>Bamboo Stand</StyledH3>
            <span>Pledge $25 or more</span>
          </header>
          <StyledPara>
            You get ergonomic stand made of natural bamboo. You're helped us
            launch our promotional campaign, and you'll be added to a special
            Backer member list.
          </StyledPara>
          <footer>
            <StyledPara>
              101 <span>left</span>
            </StyledPara>
            <StyledButton variant="primary">Select Reward</StyledButton>
          </footer>
        </Card>

        <Card>
          <header>
            <StyledH3>Black Edition</StyledH3>
            <span>Pledge $75 or more</span>
          </header>
          <StyledPara>
            You got the Black Edition computer stand and a personal thank you.
            You'll be added to our Backer member list.Shipping is included.
          </StyledPara>
          <footer>
            <StyledPara>
              64 <span>left</span>
            </StyledPara>
            <StyledButton variant="primary">Select Reward</StyledButton>
          </footer>
        </Card>

        <Card>
          <header>
            <StyledH3>Mahogany Special Edition</StyledH3>
            <span>Pledge $200 or more</span>
          </header>
          <StyledPara>
            You get two Special Edition Mahogany stands a Backer T-shirt, and a
            personal thank you. You'll be add3ed to our Backer member list.
            Shipping is included
          </StyledPara>
          <footer>
            <StyledPara>
              0 <span>left</span>
            </StyledPara>
            <StyledButton variant="primary">Select Reward</StyledButton>
          </footer>
        </Card>
      </CardContainer>
    </StyledMainContentContainer>
  );
};

export default MainContentContainer;
