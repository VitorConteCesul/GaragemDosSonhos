import styled from "styled-components/native";

export const SaveButton = styled.TouchableOpacity`

  background-color: ${({ theme }) => (theme.COLORS.ORANGE_100)};
  border-radius: 10px;
  height: 50px;

  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const TextButton = styled.Text`
  font-size: 26px;
  font-weight: bold;
`;