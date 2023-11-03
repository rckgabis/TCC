import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Configuracoes from "../screens/passageiro/configuracoesPassageiro";
import Mapa from "../screens/passageiro/mapa/index";
import Notificacao from "../screens/passageiro/notific/index";
import HomeRelato from "../screens/passageiro/home/index";

const Tab = createBottomTabNavigator();

function TabRoutes() {
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
        name="Relato"
        component={HomeRelato}
        options={{
          tabBarIcon: ({ color, focoused }) => {
            if (focoused) {
              <Ionicons name="warning-outline" size={28} color={color} />;
            }

            return <Ionicons name="warning-outline" size={28} color={color} />;
          },
          tabBarLabel: () => null, // Remove o nome da aba
        }}
      />

      <Tab.Screen
        name="Mapa"
        component={Mapa}
        options={{
          tabBarIcon: ({ color, focoused }) => {
            if (focoused) {
              <Ionicons name="map-outline" size={26} color={color} />;
            }

            return <Ionicons name="map-outline" size={26} color={color} />;
          },
          tabBarLabel: () => null, // Remove o nome da aba
        }}
      />

      <Tab.Screen
        name="Notificação"
        component={Notificacao}
        options={{
          tabBarIcon: ({ color, focoused }) => {
            if (focoused) {
              <EvilIcons name="bell" size={36} color={color} />;
            }

            return <EvilIcons name="bell" size={36} color={color} />;
          },
          tabBarLabel: () => null, // Remove o nome da aba
        }}
      />

      <Tab.Screen
        name="Configurações"
        component={Configuracoes}
        options={{
          tabBarIcon: ({ color, focoused }) => {
            if (focoused) {
              <EvilIcons name="gear" size={32} color={color} />;
            }

            return <EvilIcons name="gear" size={32} color={color} />;
          },
          tabBarLabel: () => null, // Remove o nome da aba
        }}
      />
    </Tab.Navigator>
  );
}
export default TabRoutes;
