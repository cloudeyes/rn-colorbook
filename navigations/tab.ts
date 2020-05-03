import { createBottomTabNavigator } from 'react-navigation-tabs';

export default function (routes: NavigatorRoutes) {
  return createBottomTabNavigator(routes);
}
