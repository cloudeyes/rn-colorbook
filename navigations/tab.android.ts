import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

const createBottomTabNavigator = (routes: any) =>
  createMaterialBottomTabNavigator(routes, {
    shifting: true,
  });

export default createBottomTabNavigator;
