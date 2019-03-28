import React from "react";
import { View, Button, Text } from "react-native";

const Estabelecimento = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Estabelecimento</Text>
  </View>
);

Estabelecimento.navigationOptions = {
  title: "Estabelecimento"
};

export default Estabelecimento;
