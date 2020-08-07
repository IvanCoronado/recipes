import React from "react";
import { BrowserRouter } from "react-router-dom";
import { StyleSheetManager, ThemeProvider } from "styled-components";

import Navigation from "containers/Navigation";
import GlobalStyle from "styles/GlobalStyle";
import plugins from "styles/plugins";
import theme from "styles/theme";
import { RedirectWhenError } from "api/client";

const Root = () => (
  <StyleSheetManager stylisPlugins={plugins}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Navigation />
        <RedirectWhenError />
      </BrowserRouter>
    </ThemeProvider>
  </StyleSheetManager>
);

export default Root;
