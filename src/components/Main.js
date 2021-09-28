import { Container } from "../styles/utils/Container.styled";
import MainContentContainer from "./MainContent/MainContentContainer";
import MainHeaderContainer from "./MainContent/MainHeaderContainer";
import MainStatsContainer from "./MainContent/MainStatsContainer";
const Main = () => {
  return (
    <Container>
      <MainHeaderContainer />
      <MainStatsContainer />
      <MainContentContainer />
    </Container>
  );
};

export default Main;
