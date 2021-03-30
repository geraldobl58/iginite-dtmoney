import React from "react";

import { Header } from "./components/Header";

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <React.Fragment>
      <Header />

      <GlobalStyle />
    </React.Fragment>
  );
}