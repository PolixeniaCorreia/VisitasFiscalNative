import React, { Component } from "react";
import api from './services/api';
import { Button, SectionList, StyleSheet, FlatList, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Estabelecimento from "./Estabelecimento";

export default class Visitas extends Component {
  static navigationOptions = {
    title: 'Visitas',
    tabBarLabel: 'Visitas',
  };

  // STATES PARA ARMAZENAR A LISTA QUE IRÁ COMEÇAR VAZIO
  states = {
    Estabelecimentos: [],
  };

  async componentDidMount(){
    const response = await api.get('/estabelecimentoDAO.php');
    
    this.setStates({Estabelecimentos: response.data });
  
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
          <SectionList
            sections={[
              { title: "D", data: ["Devin", "Mailson", "Joana"] },
              {
                title: "J",
                data: [
                  "Jackson",
                  "James",
                  "Jillian",
                  "Jimmy",
                  "Joel",
                  "John",
                  "Julie"
                ]
              }
            ]}
            renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({ section }) => (
              <Text style={styles.sectionHeader}>{section.title}</Text>
            )}
            keyExtractor={(item, index) => index}
          />
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
