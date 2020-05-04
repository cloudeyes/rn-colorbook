import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { View } from 'react-native';
import { BottomTabBar } from 'react-navigation-tabs';
import { BottomTabBarProps } from 'react-navigation-tabs/lib/typescript/src/types';

//------------------------------------------------------------------------------
// https://github.com/react-navigation/react-navigation/issues/7359#issuecomment-545842090
// layout is stored as module variable
let tabBarLayout = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
};

// there is exported way to get current tabbar height
export function getTabBarHeight() {
  return tabBarLayout.height || 50;
}

// there is simple tab bar component used when creating navigator that will update this layout
export function TabBarComponent(props: BottomTabBarProps) {
  return (
    <View
      collapsable={false}
      onLayout={(event) => {
        tabBarLayout = event.nativeEvent.layout;
      }}
    >
      <BottomTabBar {...props} />
    </View>
  );
}
//------------------------------------------------------------------------------

export default function (routes: NavigatorRoutes) {
  return createBottomTabNavigator(routes, { tabBarComponent: TabBarComponent });
}
