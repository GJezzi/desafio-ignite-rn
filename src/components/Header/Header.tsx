import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import SwitchMode from "../SwitchMode/SwitchMode";

import { HeaderView, HeaderText } from "./Header.styles";

export function Header() {
  return (
    <>
      <SwitchMode />
      <HeaderView>
        <HeaderText>to.</HeaderText>
        <HeaderText>do</HeaderText>
      </HeaderView>
    </>
  );
}
