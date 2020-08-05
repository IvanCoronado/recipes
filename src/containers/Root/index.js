import React from "react";
import { BrowserRouter } from "react-router-dom";
import { StyleSheetManager, ThemeProvider } from "styled-components";

import Navigation from "containers/Navigation";
import GlobalStyle from "styles/GlobalStyle";
import plugins from "styles/plugins";
import theme from "styles/theme";
import { RedirectWhenError } from "api/client";

import { SelectedRecipesProvider } from "contexts/context";

const Root = () => (
  <StyleSheetManager stylisPlugins={plugins}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <SelectedRecipesProvider>
          <Navigation />
          <RedirectWhenError />
        </SelectedRecipesProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StyleSheetManager>
);

export default Root;
