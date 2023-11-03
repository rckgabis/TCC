import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import StackRoutes from "./src/routes/stackroutes";

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false, // Isso oculta o cabeçalho em todas as telas do StackNavigator
};

export default function App() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
