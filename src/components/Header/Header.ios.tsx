import React from "react";

import SwitchMode from "../SwitchMode/SwitchMode";

import { Container, HeaderView, HeaderText } from "./Header.styles";

export function Header() {
  return (
    <Container>
      <SwitchMode />
      <HeaderView>
        <HeaderText>to.</HeaderText>
        <HeaderText style={{ fontWeight: "bold" }}>do</HeaderText>
      </HeaderView>
    </Container>
  );
}
