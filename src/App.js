import { GlobalStyles } from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Header from "./components/Header";
import Main from "./components/Main";
import { useState } from "react";
import Modal from "./components/Modal/Modal";

function App() {
  const [isBooked, setIsBooked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onHandleBooked = () => {
    setIsBooked(!isBooked);
  };
  const onShowModal = () => {
    setShowModal(!showModal);
    console.log("Modal is open", showModal);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Main
        onHandleBooked={onHandleBooked}
        isBooked={isBooked}
        onShowModal={onShowModal}
      />
      {showModal && <Modal onShowModal={onShowModal} showModal={showModal} />}
    </ThemeProvider>
  );
}

export default App;
