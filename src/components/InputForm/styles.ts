import styled from "styled-components/native";

export const TextInput = styled.TextInput`
  background-color: ${({ theme }) => theme.COLORS.WHITE_100};

  height: 50px;
  border-radius: 10px;
  border-width: 1px;
  border-color: #000000ff;

  padding-left: 5px;
`;
