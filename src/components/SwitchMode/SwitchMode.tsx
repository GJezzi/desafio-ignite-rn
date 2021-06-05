import React from "react";
import { Switch } from "react-native";

import { Container } from "./SwitchMode.styles";

export const SwitchMode = ({
  onValueChange,
  value,
  trackColor,
  thumbColor,
}) => {
  return (
    <Container>
      <Switch
        onValueChange={onValueChange}
        value={value}
        trackColor={trackColor}
        thumbColor={thumbColor}
      />
    </Container>
  );
};
