import {
  ButtonDelete,
  ButtonText,
  Container,
  Content,
  ContentLeft,
  ContentRight,
  InfoCar,
} from "./styles";

type Props = {
  proprietario: string;
  marca: string;
  modelo: string;
  ano: string;
  onDelCar: () => void;
};

export function Car({ proprietario, marca, modelo, ano, onDelCar }: Props) {
  return (
    <Container>
      <Content>
        <ContentLeft>
          <InfoCar>{proprietario}</InfoCar>
          <InfoCar>{marca}</InfoCar>
        </ContentLeft>

        <ContentRight>
          <InfoCar>{modelo}</InfoCar>
          <InfoCar>{ano}</InfoCar>
        </ContentRight>
      </Content>
      <ButtonDelete onPress={onDelCar}>
        <ButtonText>X</ButtonText>
      </ButtonDelete>
    </Container>
  );
}
