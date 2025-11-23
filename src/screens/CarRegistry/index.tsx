import { InputForm } from "@components/InputForm";
import { Container, ContentForm, Title } from "./styles";
import { ButtonForm } from "@components/ButtonForm";
import { Header } from "@components/Header";

export function CarRegistry(){
  return(
    <Container>

      <Header />

      <Title>Registre seu Carro Antigo</Title>

      <ContentForm>
        <InputForm placeholder="Proprietário"/>
        <InputForm placeholder="Marca"/>
        <InputForm placeholder="Modelos"/>
        <InputForm placeholder="Ano"/>

        <ButtonForm />
      </ContentForm>

      
      
    </Container>
  )
}
