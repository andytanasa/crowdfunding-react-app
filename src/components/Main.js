import { Container } from "../styles/utils/Container.styled";
import MainContentContainer from "./MainContent/MainContentContainer";
import MainHeaderContainer from "./MainContent/MainHeaderContainer";
import MainStatsContainer from "./MainContent/MainStatsContainer";
const Main = ({ onHandleBooked, isBooked, showModal, onShowModal }) => {
  return (
    <Container>
      <MainHeaderContainer
        onHandleBooked={onHandleBooked}
        isBooked={isBooked}
        showModal={showModal}
        onShowModal={onShowModal}
      />
      <MainStatsContainer />
      <MainContentContainer />
    </Container>
  );
};

export default Main;
