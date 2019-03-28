import React from "react";
import { View, Button, Text } from "react-native";

const Visitas = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Hello, World!</Text>
    <Text>Visitas Fiscal Native</Text>
    <Button
      title="Abrir Empresa"
      onPress={() => navigation.navigate("Estabelecimento")}
    />
  </View>
);

Visitas.navigationOptions = {
  title: "Visitas"
};

export default Visitas;
