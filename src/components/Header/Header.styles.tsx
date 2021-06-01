import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background: ${(props) => props.theme.colors.primary};
`;

export const HeaderView = styled.View`
  padding-bottom: 44px;
  background: ${(props) => props.theme.colors.primary};
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const HeaderText = styled.Text`
  font-size: 24px;
  color: ${(props) => props.theme.colors.text};
  font-family: Poppins-Regular;
`;
