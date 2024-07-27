import { ThemeProvider } from "styled-components";
import { useRecoilValue } from "recoil";
import GlobalStyle from "./styles/GlobalStyle";
import { darkTheme, lightTheme } from "./theme";
import { themeAtom } from "./atoms";
import Root from "./pages/Root";

function App() {
  const isDark = useRecoilValue(themeAtom);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Root />
    </ThemeProvider>
  );
}

export default App;
