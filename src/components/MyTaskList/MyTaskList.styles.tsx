import styled from "styled-components/native";

export const Header = styled.Text`
  color: ${(props) => props.theme.colors.headerTextColor};
  font-size: 24px;
  font-family: Poppins-SemiBold;
`;

export const TaskButton = styled.TouchableOpacity`
  flex: 1;
  padding: 12px 10px;
  margin-bottom: 4px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const TaskButtonDone = styled.TouchableOpacity`
  flex: 1;
  padding: 12px 10px;
  margin-bottom: 4px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.doneButtonColor};
  flex-direction: row;
  align-items: center;
`;

export const TaskMarker = styled.View`
  height: 16px;
  width: 16px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.markerBorder};
  margin-right: 10px;
`;

export const TaskMarkerDone = styled.View`
  height: 16px;
  width: 16px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.primary};
  margin-right: 10px;
`;

export const TaskText = styled.Text`
  color: ${(props) => props.theme.colors.taskText};
`;

export const TaskTextDone = styled.Text`
  color: ${(props) => props.theme.colors.inputText};
  text-decoration-line: line-through;
`;
