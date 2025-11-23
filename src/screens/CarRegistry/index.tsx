import { InputForm } from "@components/InputForm";
import { Container, ContentForm, Title } from "./styles";
import { ButtonForm } from "@components/ButtonForm";
import { Header } from "@components/Header";
import { useNavigation } from "@react-navigation/native";

export function CarRegistry() {
  const navigation = useNavigation();

  function handleListCars() {
    navigation.navigate("listCars");
  }

  return (
    <Container>
      <Header onClickLogo={handleListCars} />

      <Title>Registre seu Carro Antigo</Title>

      <ContentForm>
        <InputForm placeholder="Proprietário" />
        <InputForm placeholder="Marca" />
        <InputForm placeholder="Modelos" />
        <InputForm placeholder="Ano" />

        <ButtonForm
          nameButton="Salvar Veículo"
          onPress={() => console.log("Clicado")}
        />
      </ContentForm>
    </Container>
  );
}
