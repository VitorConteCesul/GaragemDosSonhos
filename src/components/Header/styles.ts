import styled from "styled-components/native";

export const Container = styled.View`
  height: 210px;
  background-color: ${({ theme }) => (theme.COLORS.WHITE_100)};
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  margin-top: 30px;
  height: 110px;
  width: 110px;
`;