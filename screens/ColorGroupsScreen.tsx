import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { INavigationProp } from '../navigations';

const ColorGroupsScreen = (props: INavigationProp) => {
  const [groups, setGroups] = useState([]);

  fetch('http://192.168.1.6:8000/colors/groups')
    .then((res) => res.json())
    .then((data) => {
      setGroups(data);
    });

  return (
    <View style={styles.container}>
      {(groups as string[]).map((it) => (
        <View>
          <Text>{it}</Text>
        </View>
      ))}
    </View>
  );
};

export default ColorGroupsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
