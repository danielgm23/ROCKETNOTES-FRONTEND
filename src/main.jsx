import { StrictMode } from "react";
import { createRoot } from "react-dom/client";



import { ThemeProvider } from "styled-components";

import { Routes } from "./routes";

import theme from "./styles/theme.js";

import GlobalStyles from "./styles/global.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
     <Routes/>
    </ThemeProvider>
  </StrictMode>
);
