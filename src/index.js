import Visitas from "./Visitas";
import Estabelecimento from "./Estabelecimento";

import { createStackNavigator } from "react-navigation"; // , createBottomTabNavigator, createDrawerNavigator

<<<<<<< HEAD
const StackNavigator = createStackNavigator(
  {
    Visitas: Visitas,
    Estabelecimento: Estabelecimento
  },
  {
    initialRouteName: "Visitas",
  }
);
=======
const StackNavigator = createStackNavigator({
  Visitas: Visitas,
  Estabelecimento: Estabelecimento
});
>>>>>>> ea25f4ec9e11e44d7ec9fb98ebb72aa9d8602810

// const TabNavigator = createBottomTabNavigator({
//   Home: Visitas,
//   About: Estabelecimento,
// });

// const DrawerNavigator = createDrawerNavigator({
//   Home: Visitas,
//   About: Estabelecimento,
// });

export default { StackNavigator }; //, TabNavigator, DrawerNavigator
