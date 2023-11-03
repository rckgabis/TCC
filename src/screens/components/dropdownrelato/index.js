import { Picker } from "@react-native-picker/picker";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const DropdownRelato = ({
  options,
  onValueChange,
  selectedValue,
  iconSource,
  placeholder,
  label,
}) => {
  return (
    <View style={styles.selectContainer}>
      <View style={styles.iconContainer}>
        <Image source={iconSource} style={styles.icon} />
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={styles.picker}
      >
        {placeholder && <Picker.Item label={placeholder} value="" />}
        {options.map((option, index) => (
          <Picker.Item key={index} label={option} value={option} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  selectContainer: {
    padding: 2,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 250,
    marginRight: 15,
  },
  iconContainer: {
    width: 50,
    height: 38,
    marginLeft: -200,
    marginRight: 20,
  },
  picker: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
    marginLeft: -50,
    marginRight: 5,
  },
});

export default DropdownRelato;
