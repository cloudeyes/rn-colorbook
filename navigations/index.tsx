import React from 'react';
import { useDispatch } from 'react-redux';

import { createAppContainer, NavigationRoute } from 'react-navigation';
import {
  createStackNavigator,
  NavigationStackProp,
} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from 'react-navigation-header-buttons';

import createTabNavigator from './TabBar';

import ColorGroupsScreen from '../screens/ColorGroupsScreen';
import ColorGroupItemsScreen from '../screens/ColorGroupItemsScreen';
import ColorDetailScreen from '../screens/ColorDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import FiltersScreen from '../screens/FiltersScreen';
import { COLORS } from '../constants/Colors';
import { WEB_COLORS } from '../data/colors';

const colorDetailNavOpts = {
  screen: ColorDetailScreen,
  navigationOptions: (props: any) => {
    const getParam = props.navigation.getParam;
    const idx = getParam('id') - 1;
    const color = WEB_COLORS[idx];
    const toggleFavorite = getParam('toggleFavorite');
    const isFavorite = getParam('isFavorite');
    const iconColor = isFavorite && COLORS.primary;
    return {
      title: `${color.name} (${color.hex})`,
      headerRight: (_) => {
        return (
          <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
            <Item
              title="즐겨찾기"
              iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
              iconColor={iconColor}
              onPress={toggleFavorite}
            />
          </HeaderButtons>
        );
      },
    };
  },
};

const IoniconsHeaderButton = (props: any) => (
  <HeaderButton
    {...props}
    color={props.iconColor || COLORS.menu}
    IconComponent={Ionicons}
    iconSize={23}
  />
);

import { NavigationStackScreenProps } from 'react-navigation-stack';
import {
  NavigationDrawerScreenProps,
  NavigationDrawerProp,
} from 'react-navigation-drawer';
import { NavigationParams } from 'react-navigation';

export type IStackNavigationProps = NavigationStackScreenProps<any, any>;
export type IStackNavigation = NavigationStackProp<
  NavigationRoute,
  NavigationParams
>;
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
      title: `${props.navigation.getParam('name')} 계열 색상`,
    }),
  },
  ColorDetail: colorDetailNavOpts,
});

const FavoritesNavigator = createStackNavigator({
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: (props) => {
      return {
        title: '즐겨찾기',
        headerLeft: (_) => (
          <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
            <Item
              title="menu"
              iconName="ios-menu"
              onPress={() => (props as any).navigation.toggleDrawer()}
            />
          </HeaderButtons>
        ),
      };
    },
  },
  FavoriteColorDetail: colorDetailNavOpts,
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
      tabBarColor: COLORS.primary,
      tabBarLabel: '색상',
    },
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo: any) => (
        <Ionicons size={25} name="ios-star" color={tabInfo.tintColor} />
      ),
      tabBarColor: COLORS.favorites,
      tabBarLabel: '즐겨찾기',
    },
  },
});

const FilterNavigator = createStackNavigator({
  Filters: {
    screen: FiltersScreen,
    navigationOptions: (props) => {
      return {
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
      };
    },
  },
});

const DrawerNavigator = createDrawerNavigator({
  Colors: {
    screen: ColorsTabNavigator,
    navigationOptions: (props) => {
      // console.log('getParam:', props.navigation.getParam('filters'));
      return {
        title: '색상 목록',
        drawerIcon: ({ tintColor }) => (
          <Ionicons size={25} color={tintColor} name="ios-color-palette" />
        ),
      };
    },
  },
  Filters: {
    screen: FilterNavigator,
    navigationOptions: (props) => {
      return {
        title: '필터',
        drawerIcon: ({ tintColor }) => (
          <Ionicons size={25} color={tintColor} name="ios-funnel" />
        ),
      };
    },
  },
});

export default createAppContainer(DrawerNavigator);
