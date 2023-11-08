import { EvilIcons, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ConfiguracoesSuporte from "../screens/suporte/configuracoes";
import HomeEstacao from "../screens/suporte/estacao";
import HomeLinhas from "../screens/suporte/home";
import HomeSituacao from "../screens/suporte/situacao";
import VisualizarRelatoPassageiro from "../screens/suporte/visualizarRelatos";

const Tab = createBottomTabNavigator();

function TabRoutesSuporte() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#7C5CCE",
        tabBarInactiveTintColor: "#181818",
        headerShown: false,

        tabBarStyle: {
          position: "absolute",
          backgroundColor: "white",
          borderTopWidth: 0,
          elevation: 0,
          height: 60,
          marginBottom: 12,
          marginHorizontal: 20,
        },
      }}
    >
      <Tab.Screen
        name="HomeLinhas"
        component={HomeLinhas}
        options={{
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return (
                <Ionicons name="git-branch-outline" size={28} color={color} />
              );
            }
            return (
              <Ionicons name="git-branch-outline" size={28} color={color} />
            );
          },
          tabBarLabel: () => null, // Remove o nome da aba
        }}
      />

      <Tab.Screen
        name="HomeEstacao"
        component={HomeEstacao}
        options={{
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              <SimpleLineIcons name="location-pin" size={28} color={color} />;
            }

            return (
              <SimpleLineIcons name="location-pin" size={28} color={color} />
            );
          },
          tabBarLabel: () => null, // Remove o nome da aba
        }}
      />

      <Tab.Screen
        name="HomeSituacao"
        component={HomeSituacao}
        options={{
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              <Ionicons name="alert-circle-outline" size={30} color={color} />;
            }

            return (
              <Ionicons name="alert-circle-outline" size={30} color={color} />
            );
          },
          tabBarLabel: () => null, // Remove o nome da aba
        }}
      />

      <Tab.Screen
        name="VisualizarRelatoPassageiro"
        component={VisualizarRelatoPassageiro}
        options={{
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              <Ionicons name="warning-outline" size={28} color={color} />
            }

            return <Ionicons name="warning-outline" size={28} color={color} />;
          },
          tabBarLabel: () => null, // Remove o nome da aba
        }}
      />

      <Tab.Screen
        name="Configurações"
        component={ConfiguracoesSuporte}
        options={{
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              <EvilIcons name="gear" size={34} color={color} />;
            }

            return <EvilIcons name="gear" size={34} color={color} />;
          },
          tabBarLabel: () => null, // Remove o nome da aba
        }}
      />

    </Tab.Navigator>
  );
}
export default TabRoutesSuporte;
