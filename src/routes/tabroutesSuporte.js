import { EvilIcons, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import VisualizarRelatoPassageiro from "../screens/suporte/visualizarRelatos";

import Linhas from "../screens/suporte/home";
import AlterarLinhas from "../screens/suporte/home/alterarLinhas";
import CadastrarLinhas from "../screens/suporte/home/cadastrarLinhas";
import ExcluirLinhas from "../screens/suporte/home/excluirLinhas";
import VisualizarLinhas from "../screens/suporte/home/visualizarLinhas";

import ConfiguracoesSuporte from "../screens/suporte/configuracoes";
import DesenvolvedorasSuporte from "../screens/suporte/desenvolvedorasSuporte";

import HomeEstacao from "../screens/suporte/estacao";
import AlterarEstacoes from "../screens/suporte/estacao/alterarEstacao";
import CadastrarEstacao from "../screens/suporte/estacao/cadastrarEstacao";
import ExcluirEstacoes from "../screens/suporte/estacao/excluirEstacao";
import VisualizarEstacoes from "../screens/suporte/estacao/visualizarEstacao";

import HomeSituacao from "../screens/suporte/situacao";
import AlterarSituacao from "../screens/suporte/situacao/alterarSituacao";
import CadastrarSituacao from "../screens/suporte/situacao/cadastrarSituacao";
import ExcluirSituacao from "../screens/suporte/situacao/excluirSituacao";
import VisualizarSituacao from "../screens/suporte/situacao/visualizarSituacao";


const Tab = createBottomTabNavigator();
const LinhasStack = createStackNavigator();
const EstacaoStack = createStackNavigator();
const SituacaoStack = createStackNavigator();
const ConfigStack = createStackNavigator();

function LinhasStackScreen() {
  return (
    <LinhasStack.Navigator>
      <LinhasStack.Screen
        name="Linhas"
        component={Linhas}
        options={{ headerShown: false }} // Oculta o header
      />
      <LinhasStack.Screen
        name="CadastrarLinhas"
        component={CadastrarLinhas}
        options={{ headerShown: false }} // Oculta o header
      />

      <LinhasStack.Screen
        name="AlterarLinhas"
        component={AlterarLinhas}
        options={{ headerShown: false }} // Oculta o header
      />

      <LinhasStack.Screen
        name="ExcluirLinhas"
        component={ExcluirLinhas}
        options={{ headerShown: false }} // Oculta o header
      />

      <LinhasStack.Screen
        name="VisualizarLinhas"
        component={VisualizarLinhas}
        options={{ headerShown: false }} // Oculta o header
      />
    </LinhasStack.Navigator>
  );
}

function EstacaoStackScreen() {
  return (
    <EstacaoStack.Navigator>
      <EstacaoStack.Screen
        name="HomeEstacao"
        component={HomeEstacao}
        options={{ headerShown: false }} // Oculta o header
      />
      <EstacaoStack.Screen
        name="CadastrarEstacao"
        component={CadastrarEstacao}
        options={{ headerShown: false }} // Oculta o header
      />
      <EstacaoStack.Screen
        name="AlterarEstacao"
        component={AlterarEstacoes}
        options={{ headerShown: false }} // Oculta o header
      />
      <EstacaoStack.Screen
        name="ExcluirEstacao"
        component={ExcluirEstacoes}
        options={{ headerShown: false }} // Oculta o header
      />

<EstacaoStack.Screen
        name="VisualizarEstacao"
        component={VisualizarEstacoes}
        options={{ headerShown: false }} // Oculta o header
      />
    </EstacaoStack.Navigator>
  );
}

function SituacaoStackScreen() {
  return (
    <SituacaoStack.Navigator>
      <SituacaoStack.Screen
        name="Situacao"
        component={HomeSituacao}
        options={{ headerShown: false }} // Oculta o header
      />
      <SituacaoStack.Screen
        name="CadastrarSituacao"
        component={CadastrarSituacao}
        options={{ headerShown: false }} // Oculta o header
      />
      <SituacaoStack.Screen
        name="AlterarSituacao"
        component={AlterarSituacao}
        options={{ headerShown: false }} // Oculta o header
      />
      <SituacaoStack.Screen
        name="ExcluirSituacao"
        component={ExcluirSituacao}
        options={{ headerShown: false }} // Oculta o header
      />

<SituacaoStack.Screen
        name="VisualizarSituacao"
        component={VisualizarSituacao}
        options={{ headerShown: false }} // Oculta o header
      />
    </SituacaoStack.Navigator>
  );
}

function ConfigStackScreen() {
  return (
    <ConfigStack.Navigator>
      <ConfigStack.Screen
        name="Configuracoes"
        component={ConfiguracoesSuporte}
        options={{ headerShown: false }} // Oculta o header
      />
      <ConfigStack.Screen
        name="DesenvolvedorasSuporte"
        component={DesenvolvedorasSuporte}
        options={{ headerShown: false }} // Oculta o header
      />
      {/* Adicione outras telas relacionadas às Configurações aqui, se necessário */}
    </ConfigStack.Navigator>
  );
}

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
        name="Linhas"
        component={LinhasStackScreen}
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
        name="Estacao"
        component={EstacaoStackScreen}
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
        name="Situacao"
        component={SituacaoStackScreen}
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
              <Ionicons name="warning-outline" size={28} color={color} />;
            }

            return <Ionicons name="warning-outline" size={28} color={color} />;
          },
          tabBarLabel: () => null, // Remove o nome da aba
        }}
      />

      <Tab.Screen
        name="Configurações"
        component={ConfigStackScreen}
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
