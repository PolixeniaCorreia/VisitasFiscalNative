import React from "react";
import { View, SectionList, Button, Text, TouchableOpacity, StyleSheet } from "react-native";

import styles from './style';
// Import Icon from 'react-native-vector-icons/MaterialIcons';

const Visitas = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Visitas Fiscal Native ;D</Text>
    <SectionList
          sections={[
            {title: 'D', data: ['Devin','Mailson','Joana']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />

    <Button
      title="ADCIONAR"
      onPress={() => navigation.navigate("Estabelecimento")}
    />
  </View>
);

Visitas.navigationOptions = {
  title: "Visitas",

  headerRight: (
    <TouchableOpacity
    // style={styles.button}
    onPress={this.onPress}>

    <Text > NOVO </Text>
  </TouchableOpacity>

  )
};

export default Visitas;
