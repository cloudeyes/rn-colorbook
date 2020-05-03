import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

const globalViewStyle: ViewStyle = {
  flex: 1,
  // borderColor: 'red',
  // borderWidth: 1,
  alignItems: 'center',
  backgroundColor: '#fff',
  justifyContent: 'center',
};

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export function createStyle<T extends NamedStyles<T>>(
  styles: NamedStyles<T>
): T {
  const newStyles = { ...styles } as any;
  for (const key in newStyles) {
    if (!newStyles.hasOwnProperty(key)) continue;
    const style = newStyles[key];
    newStyles[key] = { ...globalViewStyle, ...style };
  }
  return StyleSheet.create(newStyles);
}

export default globalViewStyle;
