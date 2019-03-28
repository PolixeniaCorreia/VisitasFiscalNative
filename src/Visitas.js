<<<<<<< HEAD
import React, { Component } from "react";
import { Button, SectionList, StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class Visitas extends Component {
  static navigationOptions = {
    title: 'Visitas',
    tabBarLabel: 'Visitas',
  };
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
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
=======
import React from 'react';
import { View, Button, Text } from 'react-native';

const Visitas = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Visitas Fiscal Native ;D</Text>
    <Button 
      title="ADCIONAR"
      onPress={() => navigation.navigate('Estabelecimento') }
    /> 
  </View>
);

Visitas.navigationOptions = {
  title: 'Visitas',
}

export default Visitas;
>>>>>>> ea25f4ec9e11e44d7ec9fb98ebb72aa9d8602810
