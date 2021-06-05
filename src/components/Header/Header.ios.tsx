import React from "react";

import { Container, HeaderView, HeaderText } from "./Header.styles";

export function Header() {
  return (
    <Container>
      <HeaderView>
        <HeaderText>to.</HeaderText>
        <HeaderText style={{ fontWeight: "bold" }}>do</HeaderText>
      </HeaderView>
    </Container>
  );
}
