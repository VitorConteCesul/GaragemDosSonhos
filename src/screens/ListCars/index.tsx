import { Header } from "@components/Header";
import { Container, ContentList, Title } from "./styles";
import { ButtonForm } from "@components/ButtonForm";
import { useNavigation } from "@react-navigation/native";
import { Car } from "@screens/Car";

export function ListCars() {
  const navigation = useNavigation();

  function handleCarRegistry() {
    navigation.navigate("carRegistry");
  }

  return (
    <Container>
      <Header />

      <ContentList>
        <Title>Lista de Carros Antigos</Title>

        <Car
          proprietario="Vito"
          ano="1988"
          marca="VW"
          modelo="GOL"
          onDelCar={() => console.log("Apagado")}
        />

        <ButtonForm
          nameButton="Adicionar Veículo"
          onPress={handleCarRegistry}
        />
      </ContentList>
    </Container>
  );
}
