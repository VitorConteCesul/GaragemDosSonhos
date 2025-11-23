import {
  ButtonDelete,
  ButtonText,
  Container,
  Content,
  ContentText,
  InfoCar
} from "./styles";

type Props = {
  proprietario: string;
  marca: string;
  modelo: string;
  ano: string;
  onDelCar: ( ) => void;
};

export function Car({ proprietario, marca, modelo, ano, onDelCar }: Props) {
  return (
    <Container>
      <Content>
        <ContentText>
          <InfoCar>{proprietario}</InfoCar>
          <InfoCar>{marca}</InfoCar>
        </ContentText>

        <ContentText>
          <InfoCar>{modelo}</InfoCar>
          <InfoCar>{ano}</InfoCar>
        </ContentText>
      </Content>
      <ButtonDelete onPress={onDelCar}>
        <ButtonText name="delete-outline"/>
      </ButtonDelete>
    </Container>
  );
}
