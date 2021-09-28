import { GlobalStyles } from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Main />
    </ThemeProvider>
  );
}

export default App;
