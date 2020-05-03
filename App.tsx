import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigator from './navigations';

export default function App() {
  return (
    <View style={styles.container}>
      <MainNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
