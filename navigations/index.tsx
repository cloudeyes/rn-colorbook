import React from 'react';

import { createAppContainer, NavigationRoute } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from 'react-navigation-header-buttons';

import createTabNavigator from './tab';

import ColorGroupsScreen from '../screens/ColorGroupsScreen';
import ColorGroupItemsScreen from '../screens/ColorGroupItemsScreen';
import ColorDetailScreen from '../screens/ColorDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import FiltersScreen from '../screens/FiltersScreen';
import { COLORS } from '../constants/Colors';

const IoniconsHeaderButton = (props: any) => (
  <HeaderButton
    {...props}
    IconComponent={Ionicons}
    iconSize={23}
    color={COLORS.menuColor}
  />
);

import { NavigationStackScreenProps } from 'react-navigation-stack';
import {
  NavigationDrawerScreenProps,
  NavigationDrawerProp,
} from 'react-navigation-drawer';
import { NavigationParams } from 'react-navigation';

export type IStackNavigationProps = NavigationStackScreenProps<any, any>;
export type IDrawerNavigationProps = NavigationDrawerScreenProps<any, any>;
export type IDrawerNavigation = NavigationDrawerProp<
  NavigationRoute,
  NavigationParams
>;

const HeaderMenuButton = (props: { navigation: IDrawerNavigation }) => (
  <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
    <Item
      title="menu"
      iconName="ios-menu"
      onPress={() => props.navigation.toggleDrawer()}
    />
  </HeaderButtons>
);

const ColorGroupsNavigator = createStackNavigator({
  ColorGroups: {
    screen: ColorGroupsScreen,
    navigationOptions: (props: any) => ({
      title: '색상 그룹',
      headerLeft: (_) => <HeaderMenuButton navigation={props.navigation} />,
    }),
  },
  GroupItems: {
    screen: ColorGroupItemsScreen,
    navigationOptions: (props: any) => ({
      title: '색상 목록',
      // headerLeft: (_) => <HeaderMenuButton navigation={props.navigation} />,
    }),
  },
  ColorDetail: {
    screen: ColorDetailScreen,
    navigationOptions: {
      title: '색 상세 내용',
    },
  },
});

const ColorsTabNavigator = createTabNavigator({
  Colors: {
    screen: ColorGroupsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo: any) => (
        <Ionicons
          size={25}
          name="ios-color-palette"
          color={tabInfo.tintColor}
        />
      ),
      tabBarColor: 'blue',
      tabBarLabel: '색상',
    },
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo: any) => (
        <Ionicons size={25} name="ios-star" color={tabInfo.tintColor} />
      ),
      tabBarColor: 'red',
      tabBarLabel: '즐겨찾기',
    },
  },
});

const FilterNavigator = createStackNavigator({
  Filters: {
    screen: FiltersScreen,
    navigationOptions: (props) => ({
      title: '필터',
      headerLeft: (_) => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="menu"
            iconName="ios-menu"
            onPress={() => (props as any).navigation.toggleDrawer()}
          />
        </HeaderButtons>
      ),
    }),
  },
});

const DrawerNavigator = createDrawerNavigator({
  Colors: {
    screen: ColorsTabNavigator,
    navigationOptions: {
      title: '색상 목록',
    },
  },
  Filters: {
    screen: FilterNavigator,
    navigationOptions: {
      title: '필터',
    },
  },
});

export default createAppContainer(DrawerNavigator);
