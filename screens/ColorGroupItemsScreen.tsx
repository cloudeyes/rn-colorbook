import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { IStackNavigationProps } from '../navigations';
import ColorTable from '../components/ColorTable';
import { IRootState } from '../store';

const ColorGroupItemsScreen = (props: IStackNavigationProps) => {
  const groupName = props.navigation.getParam('name');
  const availColors = useSelector(
    (state: IRootState) => state.colors.filteredColors
  );
  const favoriteIds = useSelector(
    (state: IRootState) => state.colors.favoriteColors
  );
  const colors = availColors.filter((it) => it.group === groupName);

  return (
    <ColorTable
      colors={colors}
      favoriteIds={favoriteIds}
      style={styles.container}
      navigation={props.navigation}
      routeName={'ColorDetail'}
    />
  );
};

export default ColorGroupItemsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
