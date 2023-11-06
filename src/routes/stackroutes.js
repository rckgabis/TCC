import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import LoginPassageiro from "../screens/passageiro/loginPassageiro/index";
import TabRoutes from "./tabroutes";
import LoginSuporte from "../screens/suporte/loginSuporte/index";
import TabRoutesSuporte from "./tabroutesSuporte";
import DesenvolvedorasSuporte from "../screens/suporte/desenvolvedorasSuporte";
import CadastrarLinhas from "../screens/suporte/home/cadastrarLinhas/index";
import VisualizarLinhas from "../screens/suporte/home/visualizarLinhas";
import AlterarLinhas from "../screens/suporte/home/alterarLinhas";
import ExcluirLinhas from "../screens/suporte/home/excluirLinhas";
import CadastrarEstacao from "../screens/suporte/estacao/cadastrarEstacao";
import VisualizarEstacao from "../screens/suporte/estacao/visualizarEstacao";
import AlterarEstacoes from "../screens/suporte/estacao/alterarEstacao";
import ExcluirEstacoes from "../screens/suporte/estacao/excluirEstacao";
import CadastrarSituacao from "../screens/suporte/situacao/cadastrarSituacao";
import VisualizarSituacao from "../screens/suporte/situacao/visualizarSituacao";
import ExcluirSituacao from "../screens/suporte/situacao/excluirSituacao";
import AlterarSituacao from "../screens/suporte/situacao/alterarSituacao";
import Desenvolvedoras from "../screens/passageiro/desenvolvedoras";
import Feedback from "../screens/passageiro/home/feedback";

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

function StackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="LoginPassageiro"
      screenOptions={screenOptions}
    >
      <Stack.Screen name="LoginPassageiro" component={LoginPassageiro} />
      <Stack.Screen name="HomeRelato" component={TabRoutes} />
      <Stack.Screen name="Desenvolvedoras" component={Desenvolvedoras} />
      <Stack.Screen name="Feedback" component={Feedback} />
      
      
      <Stack.Screen name="LoginSuporte" component={LoginSuporte} />

      <Stack.Screen name="Linhas" component={TabRoutesSuporte} />
      <Stack.Screen name="CadastrarLinhas" component={CadastrarLinhas} />
      <Stack.Screen name="VisualizarLinhas" component={VisualizarLinhas} />
      <Stack.Screen name="AlterarLinhas" component={AlterarLinhas} />
      <Stack.Screen name="ExcluirLinhas" component={ExcluirLinhas} />

      <Stack.Screen name="CadastrarEstacao" component={CadastrarEstacao} />
      <Stack.Screen name="VisualizarEstacao" component={VisualizarEstacao} />
      <Stack.Screen name="AlterarEstacoes" component={AlterarEstacoes} />
      <Stack.Screen name="ExcluirEstacoes" component={ExcluirEstacoes} />


      <Stack.Screen name="CadastrarSituacao" component={CadastrarSituacao} />
      <Stack.Screen name="VisualizarSituacao" component={VisualizarSituacao} />
      <Stack.Screen name="ExcluirSituacao" component={ExcluirSituacao} />
      <Stack.Screen name="AlterarSituacao" component={AlterarSituacao} />

      <Stack.Screen name ="DesenvolvedorasSuporte" component={DesenvolvedorasSuporte}/>
    </Stack.Navigator>
  );
}

export default StackRoutes;
