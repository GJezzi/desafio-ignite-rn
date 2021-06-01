import React, { useState } from "react";
import { Switch } from "react-native";

import { Container } from "./SwitchMode.styles";

const SwitchMode = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <Container>
      <Switch onValueChange={toggleSwitch} value={isEnabled} />
    </Container>
  );
};

export default SwitchMode;
