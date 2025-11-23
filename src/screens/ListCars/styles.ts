import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DEFAULT};
`;

export const ContentList = styled.View`
  padding: 0px 20px 0px 20px;
`;

export const Title = styled.Text`
  font-size: 32px;
  text-align: center;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 30px;
`;
