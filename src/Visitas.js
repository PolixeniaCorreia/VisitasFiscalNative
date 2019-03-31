import React, { Component } from "react";
import api from "./services/api";
import {
  Button,
  SectionList,
  StyleSheet,
  FlatList,
  Text,
  View
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Estabelecimento from "./Estabelecimento";

export default class Visitas extends Component {
  static navigationOptions = {
    title: "Visitas",
    tabBarLabel: "Visitas"
  };

  state = {
    Estabelecimentos: []
  };

  async componentDidMount() {
    const response = await api.get("/estabelecimentoDAO.php");

    this.setState({ Estabelecimentos: response.data });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Estabelecimento</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("Estabelecimento")}
        />
        <View style={styles.container}>
        <FlatList 
        data={this.state.Estabelecimentos}
        keyExtractor={estab => estab.id}
        />
          {this.state.Estabelecimentos.map(estab => (
            <Text>{estab.cnpj}</Text>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 2,
    paddingRight: 2,
    paddingBottom: 2,
    fontSize: 12,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)"
  },
  item: {
    padding: 2,
    fontSize: 12,
    height: 44
  }
});
