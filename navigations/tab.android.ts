/// <reference path="./tab.d.ts" />
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

export default function (routes: NavigatorRoutes, config?: NavigatorConfig) {
  return createMaterialBottomTabNavigator(routes, {
    shifting: true,
  });
}
