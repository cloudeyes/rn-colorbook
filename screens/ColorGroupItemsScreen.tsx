import React from 'react';
import { StyleSheet } from 'react-native';
import { IStackNavigationProps } from '../navigations';
import { COLOR_GROUPS } from '../data/colors';
import ColorTable from '../components/ColorTable';

const ColorGroupItemsScreen = (props: IStackNavigationProps) => {
  const groupName = props.navigation.getParam('name');
  const colors = COLOR_GROUPS[groupName];

  return (
    <ColorTable
      colors={colors}
      style={styles.container}
      navigation={props.navigation}
    />
  );
};

export default ColorGroupItemsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
