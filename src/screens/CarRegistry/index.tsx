import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Controller, useForm } from "react-hook-form";

import { ButtonForm } from "@components/ButtonForm";
import { Header } from "@components/Header";
import { InputForm } from "@components/InputForm";
import { TextError } from "@components/TextError";
import { Container, ContentForm, Title } from "./styles";

interface FormData {
  proprietario: string;
  marca: string;
  modelo: string;
  ano: string;
}

export function CarRegistry() {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  function handleListCars() {
    navigation.navigate("listCars");
  }

  async function handleSaveCar(form: FormData) {
    const newCar = {
      id: String(new Date().getTime()),
      proprietario: form.proprietario,
      marca: form.marca,
      modelo: form.modelo,
      ano: form.ano,
    };

    try {
      const storedCars = await AsyncStorage.getItem("cars");
      const currentCars = storedCars ? JSON.parse(storedCars) : [];

      const updatedCars = [...currentCars, newCar];

      await AsyncStorage.setItem("cars", JSON.stringify(updatedCars));

      reset();

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
        <Controller
          control={control}
          name="proprietario"
          rules={{ required: "O Proprietário é obrigatório" }}
          render={({ field: { onChange, value } }) => (
            <InputForm
              placeholder="Proprietário"
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.proprietario && (
          <TextError text={errors.proprietario.message} />
        )}

        <Controller
          control={control}
          name="marca"
          rules={{ required: "A Marca é obrigatória" }}
          render={({ field: { onChange, value } }) => (
            <InputForm
              placeholder="Marca"
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.marca && (
          <TextError text={errors.marca.message} />
        )}

        <Controller
          control={control}
          name="modelo"
          rules={{ required: "O Modelo é obrigatório" }}
          render={({ field: { onChange, value } }) => (
            <InputForm
              placeholder="Modelo"
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.modelo && (
          <TextError text={errors.modelo.message} />
        )}

        <Controller
          control={control}
          name="ano"
          rules={{
            required: "O Ano é obrigatório",
            minLength: {
              value: 4,
              message: "O ano deve ter 4 dígitos",
            },
          }}
          render={({ field: { onChange, value } }) => (
            <InputForm
              placeholder="Ano"
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.ano && (
          <TextError text={errors.ano.message} />
        )}

        <ButtonForm
          nameButton="Salvar Veículo"
          onPress={handleSubmit(handleSaveCar)}
        />
      </ContentForm>
    </Container>
  );
}
