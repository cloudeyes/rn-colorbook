import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { IStackNavigationProps } from '../navigations';
import { COLORS } from '../data/colors';
import TouchableFeedback from '../components/TouchableFeedback';

interface ITextItemProps {
  text: string;
  monospace?: boolean;
  bold?: boolean;
  style?: object;
  width?: number;
  paddingLeft?: number;
}

const TextItem = (props: ITextItemProps) => {
  const { text, monospace, bold, style, width, paddingLeft } = props;
  const textStyle = {
    fontWeight: (bold ? 'bold' : undefined) as any,
    fontFamily: monospace ? 'monospace' : undefined,
  };

  const viewStyle = {
    width,
    maxWidth: width,
    paddingLeft,
    ...(style || {}),
  };

  return (
    <View style={[styles.textContainer, viewStyle]}>
      <Text numberOfLines={1} ellipsizeMode="tail" style={textStyle}>
        {text}
      </Text>
    </View>
  );
};

const ColorGroupItemsScreen = (props: IStackNavigationProps) => {
  const groupName = props.navigation.getParam('name');
  const colors = COLORS.filter((it) => it.group === groupName);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextItem text="이름" bold paddingLeft={10} />
        <TextItem text="HEX 코드" bold width={80} />
        <TextItem text="색" bold width={80} />
      </View>
      <ScrollView style={styles.colorItems}>
        {colors.map((color, i) => (
          <TouchableFeedback
            key={color.id}
            onPress={() =>
              props.navigation.navigate('ColorDetail', {
                name: color.name,
              })
            }
          >
            <View
              style={[
                styles.items,
                { backgroundColor: i % 2 ? '#dddddd' : undefined },
              ]}
            >
              <TextItem text={color.name} paddingLeft={10} />
              <TextItem text={color.hex} monospace width={80} />
              <View
                style={[styles.colorContainer, { backgroundColor: color.hex }]}
              ></View>
            </View>
          </TouchableFeedback>
        ))}
      </ScrollView>
    </View>
  );
};

export default ColorGroupItemsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  colorItems: {
    flex: 1,
  },
  header: {
    flex: 1,
    height: 30,
    maxHeight: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'left',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  items: {
    flex: 1,
    height: 50,
    maxHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  colorContainer: {
    flex: 1,
    width: 80,
    maxWidth: 80,
  },
  text: {},
});
