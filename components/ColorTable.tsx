import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import TextItem from './TextItem';
import TouchableFeedback from '../components/TouchableFeedback';
import { IStackNavigation } from '../navigations';
import { ColorItem } from '../data/colors';
import { hexToRgb } from '../common/color';

const COLOR_BAR_WIDTH = 120;

interface IColorTableProps {
  colors: ColorItem[];
  favoriteIds?: Set<number>;
  inverted?: boolean; // 배경색 대신 전경색 표시
  style?: StyleSheet.NamedStyles<any> | object;
  backgroundColor?: string;
  navigation?: IStackNavigation;
  routeName?: string;
}

interface ListItem {
  idx: number;
  backgroundColor?: string;
  navigation: IStackNavigation;
  routeName: string;
  color: ColorItem;
}

const renderColorItem = (props: { item: ListItem }) => {
  const item = props.item;
  const { idx, color, navigation, routeName } = props.item;
  const textColor = item.backgroundColor ? color.hex : 'black';
  const textShadowStyle = item.backgroundColor
    ? {
        textShadowColor: 'black',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 2,
      }
    : {};
  const backgroundColor =
    item.backgroundColor || (idx % 2 ? '#dddddd' : undefined);
  const sampleBarColor = item.backgroundColor || 'black';
  const rgb = hexToRgb(color.hex);
  const rgbText = `rgb(${rgb.red},${rgb.green},${rgb.blue})`;
  const itemView = (
    <View style={[styles.item, { backgroundColor }]}>
      <TextItem
        text={color.name}
        textStyle={{ ...textShadowStyle }}
        color={textColor}
        paddingLeft={10}
        bold
      />
      <TextItem text={color.hex} color={textColor} monospace width={80} />
      <TextItem
        text={rgbText}
        textStyle={{ ...textShadowStyle }}
        alignItems="center"
        color={sampleBarColor}
        backgroundColor={color.hex}
        width={COLOR_BAR_WIDTH}
      />
    </View>
  );

  return !navigation ? (
    itemView
  ) : (
    <TouchableFeedback
      key={color.id}
      onPress={() => {
        if (navigation) {
          const { id, isFavorite } = color;
          navigation.navigate(routeName, {
            id,
            isFavorite,
          });
        }
      }}
    >
      {itemView}
    </TouchableFeedback>
  );
};

const ColorTable = (props: IColorTableProps) => {
  const {
    colors,
    favoriteIds: favorites,
    backgroundColor,
    style,
    navigation,
    routeName,
  } = props;
  const colorsWithIndex = colors.map((color, idx) => ({
    idx,
    isFavorite: favorites && favorites.has(color.id),
    navigation,
    routeName,
    backgroundColor,
    color,
  }));

  return (
    <View style={style}>
      <View style={styles.header}>
        <TextItem text="이름" color="#666" bold paddingLeft={10} />
        <TextItem text="HEX 코드" color="#666" bold width={80} />
        <TextItem text="색" color="#666" bold width={COLOR_BAR_WIDTH} />
      </View>
      <FlatList
        data={colorsWithIndex as any}
        style={styles.items}
        keyExtractor={(item) => item.color.id.toString()}
        renderItem={renderColorItem}
      />
    </View>
  );
};

export default ColorTable;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 30,
    maxHeight: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  items: {},
  item: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});
