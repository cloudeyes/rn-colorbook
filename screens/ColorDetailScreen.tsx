import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ColorDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ColorDetailScreen</Text>
    </View>
  );
};

export default ColorDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
