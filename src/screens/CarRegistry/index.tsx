import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";

import { ButtonForm } from "@components/ButtonForm";
import { Header } from "@components/Header";
import { InputForm } from "@components/InputForm";
import { useNavigation } from "@react-navigation/native";
import { Container, ContentForm, Title } from "./styles";

export function CarRegistry() {
  const navigation = useNavigation();

  const [proprietario, setProprietario] = useState<string>("");
  const [marca, setMarca] = useState<string>("");
  const [modelo, setModelo] = useState<string>("");
  const [ano, setAno] = useState<string>("");

  function handleListCars() {
    navigation.navigate("listCars");
  }

  async function handleSaveCar() {
    if (!proprietario || !marca || !modelo || !ano) {
      return;
    }
    const newCar = {
      id: String(new Date().getTime()),
      proprietario,
      marca,
      modelo,
      ano,
      registrationDate: new Date().toISOString(),
    };

    try {
      const storedCars = await AsyncStorage.getItem("cars");
      const currentCars = storedCars ? JSON.parse(storedCars) : [];

      const updatedCars = [...currentCars, newCar];

      await AsyncStorage.setItem("cars", JSON.stringify(updatedCars));

      setProprietario("");
      setMarca("");
      setModelo("");
      setAno("");

      handleListCars();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Header onClickLogo={handleListCars} />
      <Title>Registre seu Carro Antigo</Title>
      <ContentForm>
        <InputForm
          placeholder="Proprietário"
          value={proprietario}
          onChangeText={setProprietario}
        />
        <InputForm placeholder="Marca" value={marca} onChangeText={setMarca} />
        <InputForm
          placeholder="Modelo"
          value={modelo}
          onChangeText={setModelo}
        />
        <InputForm placeholder="Ano" value={ano} onChangeText={setAno} />
        <ButtonForm nameButton="Salvar Veículo" onPress={handleSaveCar} />
      </ContentForm>
    </Container>
  );
}
