import { GlobalStyles } from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Header from "./components/Header";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [isBooked, setIsBooked] = useState("hello");
  const onHandleBooked = (booked) => {
    setIsBooked(booked);
    console.log(isBooked);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Main onHandleBooked={onHandleBooked} />
    </ThemeProvider>
  );
}

export default App;
