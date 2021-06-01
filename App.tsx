import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";

import light from "./src/themes/light";
import dark from "./src/themes/dark";
import { Home } from "./src/pages/Home";

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <Home />
    </ThemeProvider>
  );
}
