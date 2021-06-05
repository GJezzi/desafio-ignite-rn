import styled from "styled-components/native";

export const Container = styled.View`
  background: ${(props) => props.theme.colors.inputBackgroundColor};
  border-radius: 5px;
  top: -55px;
  margin: 0 40px;
  height: 50px;
  flex-direction: row;
  align-items: center;
`;

export const TodoTextInput = styled.TextInput`
  flex: 1;
  background: ${(props) => props.theme.colors.inputBackgroundColor};
  padding-left: 12px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const TaskButton = styled.TouchableOpacity`
  background: ${(props) => props.theme.colors.secondary};
  height: 50px;
  padding: 0 16px;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;
