import { Container } from "../styles/utils/Container.styled";
import MainContentContainer from "./MainContent/MainContentContainer";
import MainHeaderContainer from "./MainContent/MainHeaderContainer";
import MainStatsContainer from "./MainContent/MainStatsContainer";
const Main = ({ onHandleBooked }) => {
  return (
    <Container>
      <MainHeaderContainer onHandleBooked={onHandleBooked} />
      <MainStatsContainer />
      <MainContentContainer />
    </Container>
  );
};

export default Main;
