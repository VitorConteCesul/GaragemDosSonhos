import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CarRegistry } from "@screens/CarRegistry";
import { ListCars } from "@screens/ListCars";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="listCars"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="carRegistry" component={CarRegistry} />

      <Screen name="listCars" component={ListCars} />
    </Navigator>
  );
}
