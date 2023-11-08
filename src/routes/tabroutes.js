import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import Configuracoes from "../screens/passageiro/configuracoesPassageiro";
import Mapa from "../screens/passageiro/mapa/index";
import Notificacao from "../screens/passageiro/notific/index";
import HomeRelato from "../screens/passageiro/home/index";
import Desenvolvedoras from "../screens/passageiro/desenvolvedoras"; // Importe a tela Desenvolvedoras
import Feedback from "../screens/passageiro/home/feedback"; // Importe a tela Feedback

const Tab = createBottomTabNavigator();
const ConfigStack = createStackNavigator();
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeRelato"
        component={HomeRelato}
        options={{ headerShown: false }} // Oculta o header
      />
      <HomeStack.Screen
        name="Feedback"
        component={Feedback}
        options={{ headerShown: false }} // Oculta o header
      />
      {/* Adicione outras telas relacionadas à Home aqui, se necessário */}
    </HomeStack.Navigator>
  );
}

function ConfigStackScreen() {
  return (
    <ConfigStack.Navigator>
      <ConfigStack.Screen
        name="Configuracoes"
        component={Configuracoes}
        options={{ headerShown: false }} // Oculta o header
      />
      <ConfigStack.Screen
        name="Desenvolvedoras"
        component={Desenvolvedoras}
        options={{ headerShown: false }} // Oculta o header
      />
      {/* Adicione outras telas relacionadas às Configurações aqui, se necessário */}
    </ConfigStack.Navigator>
  );
}

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#7C5CCE",
        tabBarInactiveTintColor: "#181818",
        headerShown: false, // Oculta o header para o TabNavigator

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
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color, focoused }) => (
            <Ionicons name="warning-outline" size={28} color={color} />
          ),
          tabBarLabel: () => null, // Remove o nome da aba
        }}
      />
      <Tab.Screen
        name="Mapa"
        component={Mapa}
        options={{
          tabBarIcon: ({ color, focoused }) => (
            <Ionicons name="map-outline" size={26} color={color} />
          ),
          tabBarLabel: () => null, // Remove o nome da aba
        }}
      />
      <Tab.Screen
        name="Notificação"
        component={Notificacao}
        options={{
          tabBarIcon: ({ color, focoused }) => (
            <EvilIcons name="bell" size={36} color={color} />
          ),
          tabBarLabel: () => null, // Remove o nome da aba
        }}
      />
      <Tab.Screen
        name="Configurações"
        component={ConfigStackScreen}
        options={{
          tabBarIcon: ({ color, focoused }) => (
            <EvilIcons name="gear" size={32} color={color} />
          ),
          tabBarLabel: () => null, // Remove o nome da aba
        }}
      />
    </Tab.Navigator>
  );
}

export default TabRoutes;
