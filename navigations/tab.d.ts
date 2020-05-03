import { NavigationRouteConfigMap, NavigationRoute } from 'react-navigation';
import {
  NavigationMaterialBottomTabOptions,
  NavigationTabProp,
} from 'react-navigation-material-bottom-tabs';
import { BottomTabBarOptions } from 'react-navigation-tabs/lib/typescript/src/types';
import { NavigationBottomTabOptions } from 'react-navigation-tabs';

global {
  declare type NavigatorRoutes = NavigationRouteConfigMap<
    NavigationMaterialBottomTabOptions,
    NavigationTabProp<NavigationRoute, any>
  >;

  declare type Config = {
    lazy?: boolean;
    tabBarComponent?: React.ComponentType<any>;
    tabBarOptions?: BottomTabBarOptions;
  };

  declare type NavigatorConfig = import('react-navigation').CreateNavigatorConfig<
    Partial<Config>,
    import('react-navigation').NavigationTabRouterConfig,
    Partial<NavigationBottomTabOptions>,
    NavigationTabProp<
      NavigationRoute<import('react-navigation').NavigationParams>,
      any
    >
  >;
}
