import React from 'react';
import { View, Button, Text } from 'react-native';

const Visitas = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Visitas Fiscal Native ;D</Text>
    <Button 
      title="Abrir Empresa"
      onPress={() => navigation.navigate('Estabelecimento') }
    />
  </View>
);

Visitas.navigationOptions = {
  title: 'Visitas',
}

export default Visitas;