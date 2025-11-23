import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Container = styled.View`
  height: 60px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.WHITE_100};
  flex-direction: row;
  margin-top: 20px;
`;

export const InfoCar = styled.Text`
  font-size: 24px;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
`;

export const ContentText = styled.View`
  justify-content: center;
`;
export const ButtonDelete = styled.TouchableOpacity`
  width: 60px;

  justify-content: center;
  align-items: center;
  background-color: red;
  border-radius: 0px 10px 10px 0px;
`;

export const ButtonText = styled(MaterialIcons)`
  font-size: 30px;
`;
