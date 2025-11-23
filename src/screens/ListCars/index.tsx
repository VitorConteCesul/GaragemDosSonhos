import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { FlatList, Alert, ActivityIndicator, Text } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback } from "react";

import { Header } from "@components/Header";
import { ButtonForm } from "@components/ButtonForm";
import { Car } from "@components/Car";
import { Container, ContentList, Title } from "./styles";

interface CarData {
  id: string;
  proprietario: string;
  marca: string;
  modelo: string;
  ano: string;
  registrationDate: string;
}

const STORAGE_KEY = "cars";

export function ListCars() {
  const navigation = useNavigation();

  const [cars, setCars] = useState<CarData[]>([]);
  const [loading, setLoading] = useState(false);

  function handleCarRegistry() {
    navigation.navigate("carRegistry");
  }

  async function loadCars() {
    setLoading(true);
    try {
      const storedCars = await AsyncStorage.getItem(STORAGE_KEY);
      const currentCars: CarData[] = storedCars ? JSON.parse(storedCars) : [];
      setCars(currentCars);
    } catch (error) {
      console.error("Erro ao carregar os carros:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelCar(id: string) {
    try {
      const updatedCars = cars.filter(car => car.id !== id);
      
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCars));
      
      setCars(updatedCars);
      
    } catch (error) {
      console.error("Erro ao deletar carro:", error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      loadCars();
    }, [])
  );
  
  if (loading) {
      return (
          <Container style={{ justifyContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator size="large" color="#007AFF" />
              <Text>Carregando dados...</Text>
          </Container>
      )
  }

  return (
    <Container>
      <Header />

      <ContentList>
        <Title>Lista de Carros Antigos</Title>

          <FlatList
            style={{ maxHeight: 430 }}
            data={cars}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Car
                proprietario={item.proprietario}
                ano={item.ano}
                marca={item.marca}
                modelo={item.modelo}
                onDelCar={() => handleDelCar(item.id)}
              />
            )}
            showsVerticalScrollIndicator={false}
          />

        <ButtonForm
          nameButton="Adicionar Veículo"
          onPress={handleCarRegistry}
        />
      </ContentList>
    </Container>
  );
}