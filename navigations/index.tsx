import React from 'react';

import { createAppContainer, NavigationScreenProp } from 'react-navigation';
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

export interface INavigationProp {
  navigation: NavigationScreenProp<any, any>;
}

const IoniconsHeaderButton = (props: any) => (
  <HeaderButton
    {...props}
    IconComponent={Ionicons}
    iconSize={23}
    color={COLORS.menuColor}
  />
);

const ColorGroupsNavigator = createStackNavigator({
  ColorGroups: {
    screen: ColorGroupsScreen,
    navigationOptions: (props) => ({
      title: '색상 그룹',
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
  GroupItems: {
    screen: ColorGroupItemsScreen,
    navigationOptions: {
      title: '색상 목록',
      headerLeft: (props) => <Ionicons name="ios-menu" size={30} />,
    },
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
