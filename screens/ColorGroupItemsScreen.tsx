import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { IStackNavigationProps } from '../navigations';

const ColorGroupItemsScreen = (props: IStackNavigationProps) => {
  return (
    <View style={styles.container}>
      <Text>ColorGroupItemsScreen</Text>
      <Button
        title="색상 상세 화면으로 이동"
        onPress={() => props.navigation.navigate('ColorDetail')}
      />
    </View>
  );
};

export default ColorGroupItemsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
