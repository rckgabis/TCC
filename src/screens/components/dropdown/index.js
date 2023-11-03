import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Dropdown = ({
  linhas,
  estacoesAtuais,
  estacoesFinais,
  onLinhaChange,
  onEstacaoAtualChange,
  onEstacaoFinalChange,
  selectedValue,
}) => {
  const [selectedLinha, setSelectedLinha] = useState(linhas[0]);
  const [selectedEstacaoAtual, setSelectedEstacaoAtual] = useState(
    estacoesAtuais[0]
  );
  const [selectedEstacaoFinal, setSelectedEstacaoFinal] = useState(
    estacoesFinais[0]
  );

  const handleLinhaChange = (linha) => {
    setSelectedLinha(linha);
    onLinhaChange(linha);
  };

  const handleEstacaoAtualChangeLocal = (estacao) => {
    setSelectedEstacaoAtual(estacao);
    onEstacaoAtualChange(estacao);
  };

  const handleEstacaoFinalChangeLocal = (estacao) => {
    setSelectedEstacaoFinal(estacao);
    onEstacaoFinalChange(estacao);
  };

  return (
    <View style={styles.container}>
      {/* Dropdown para Linha */}
      <View style={styles.selectContainer}>
        <Image
          source={require("../../../../assets/linhas.png")}
          style={styles.icon}
        />

        <Picker
          selectedValue={selectedLinha}
          onValueChange={(itemValue) => handleLinhaChange(itemValue)}
          style={styles.picker}
          dropdownIconColor="white"
        >
          {linhas.map((linha, index) => (
            <Picker.Item key={index} label={linha} value={linha} />
          ))}
        </Picker>
      </View>

      {/* Dropdown para Estação Atual */}
      <View style={styles.selectContainer}>
        <Image
          source={require("../../../../assets/stationA.png")}
          style={styles.icon}
        />

        <Picker
          selectedValue={selectedEstacaoAtual}
          onValueChange={(itemValue) =>
            handleEstacaoAtualChangeLocal(itemValue)
          }
          style={styles.picker}
          dropdownIconColor="white"
        >
          {estacoesAtuais.map((estacao, index) => (
            <Picker.Item key={index} label={estacao} value={estacao} />
          ))}
        </Picker>
      </View>

      {/* Dropdown para Estação Final */}
      <View style={styles.selectContainer}>
        <Image
          source={require("../../../../assets/stationB.png")}
          style={styles.icon}
        />

        <Picker
          selectedValue={selectedEstacaoFinal}
          onValueChange={(itemValue) =>
            handleEstacaoFinalChangeLocal(itemValue)
          }
          style={styles.picker}
          dropdownIconColor="white"
        >
          {estacoesFinais.map((estacao, index) => (
            <Picker.Item key={index} label={estacao} value={estacao} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  selectContainer: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 200,
    marginRight: -80,
  },
  icon: {
    width: 38,
    height: 38,
    marginLeft: -280,
    marginRight:40,
  },

  picker: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
    marginLeft: -30,

  },
});

export default Dropdown;
