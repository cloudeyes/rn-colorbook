import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface ITextItemProps {
  text: string;
  monospace?: boolean;
  bold?: boolean;
  style?: object;
  textStyle?: object;
  width?: number;
  color?: string;
  fontSize?: number;
  backgroundColor?: string;
  alignItems?: 'flex-start' | 'flex-end' | 'center';
  paddingLeft?: number;
}

const TextItem = (props: ITextItemProps) => {
  const {
    text,
    monospace,
    backgroundColor,
    color,
    bold,
    style,
    width,
    fontSize,
    alignItems,
    paddingLeft,
  } = props;

  const textStyle = {
    color,
    fontWeight: (bold ? 'bold' : undefined) as any,
    fontSize,
    fontFamily: monospace ? 'monospace' : undefined,
    ...props.textStyle,
  };

  const viewStyle = {
    width,
    maxWidth: width,
    backgroundColor,
    paddingLeft,
    alignItems,
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

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default TextItem;
