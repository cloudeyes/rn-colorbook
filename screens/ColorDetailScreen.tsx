import React, { useEffect, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IStackNavigationProps } from '../navigations';
import { WEB_COLORS } from '../data/colors';
import ColorTable from '../components/ColorTable';
import TextItem from '../components/TextItem';
import { hexToRgb } from '../common/color';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../store/actions/colors';
import { IRootState } from '../store';

const ColorDetailScreen = (props: IStackNavigationProps) => {
  const colorIdx = props.navigation.getParam('id') - 1;
  const color = WEB_COLORS[colorIdx];
  const favorites = useSelector(
    (state: IRootState) => state.colors.favoriteColors
  );
  const isFavorite = favorites.has(color.id);
  const rgb = hexToRgb(color.hex);
  const rgbText = `rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`;
  const colors = [...WEB_COLORS].sort((a, b) =>
    a.name < b.name ? -1 : a.name > b.name ? 1 : 0
  );

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(color.id));
  }, [dispatch, color]);

  useEffect(() => {
    props.navigation.setParams({ toggleFavorite: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFavorite });
  }, [isFavorite]);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <TextItem
          text={rgbText}
          style={{ flex: null, height: 30 }}
          fontSize={20}
          bold
        />
        <TextItem
          text="다른 색상들과 함께 보기"
          style={{ flex: null, height: 30 }}
          fontSize={16}
        />
      </View>
      <ColorTable
        colors={colors}
        style={styles.colorTable}
        backgroundColor={color.hex}
      />
    </View>
  );
};

export default ColorDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  colorTable: {
    flex: 1,
  },
});
