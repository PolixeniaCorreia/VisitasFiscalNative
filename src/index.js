import Visitas from "./Visitas";
import Estabelecimento from "./Estabelecimento";

import { createStackNavigator } from "react-navigation"; // , createBottomTabNavigator, createDrawerNavigator

const StackNavigator = createStackNavigator(
  {
    Visitas: Visitas,
    Estabelecimento: Estabelecimento
  },
  {
    initialRouteName: "Visitas"
  }
);

// const TabNavigator = createBottomTabNavigator({
//   Home: Visitas,
//   About: Estabelecimento,
// });

// const DrawerNavigator = createDrawerNavigator({
//   Home: Visitas,
//   About: Estabelecimento,
// });

export default { StackNavigator }; //, TabNavigator, DrawerNavigator
