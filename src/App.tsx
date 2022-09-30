import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./components/Router";
import { BlogProvider } from "./contexts/BlogContext";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <BlogProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Router />
        </BrowserRouter>
      </BlogProvider>
    </ThemeProvider>
  )
}
