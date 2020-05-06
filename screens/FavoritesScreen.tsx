import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import { WEB_COLORS } from '../data/colors';
import ColorTable from '../components/ColorTable';
import { IStackNavigationProps } from '../navigations';

const FavoritesScreen = (props: IStackNavigationProps) => {
  const favoriteIds = useSelector(
    (state: IRootState) => state.colors.favoriteColors
  );
  const favorites = WEB_COLORS.filter((it) => favoriteIds.has(it.id));
  return (
    <ColorTable
      colors={favorites}
      favoriteIds={favoriteIds}
      style={styles.container}
      navigation={props.navigation}
      routeName="FavoriteColorDetail"
    />
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
