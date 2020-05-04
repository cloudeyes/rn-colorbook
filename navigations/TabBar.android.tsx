/// <reference path="./TabBar.d.ts" />
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

export function getTabBarHeight() {
  return 50;
}

export default function (routes: NavigatorRoutes, config?: NavigatorConfig) {
  return createMaterialBottomTabNavigator(routes, {
    shifting: true,
  });
}
