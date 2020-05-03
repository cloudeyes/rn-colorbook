import React, { useState } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import { INavigationProps } from '../navigation';
import { createStyle } from '../common/styles';
import { COLOR_GROUPS } from '../data/colors';

const TouchableFeedback =
  Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

interface IShadowProps {
  rgb: any;
  opacity: any;
  radius: any;
  offsetWidth: any;
  offsetHeight: any;
  elevation: any;
}

const shadow = ({
  rgb,
  opacity,
  radius,
  offsetWidth,
  offsetHeight,
  elevation,
}: IShadowProps) => {
  return Platform.select({
    ios: {
      shadowColor: `rgb(${rgb})`,
      shadowOpacity: opacity,
      shadowRadius: radius,
      shadowOffset: {
        width: offsetWidth,
        height: offsetHeight,
      },
    },
    android: {
      elevation,
    },
    web: {
      boxShadow: `${offsetWidth}px ${offsetHeight}px ${radius}px rgba(${rgb}, 0.5)`,
    },
  });
};

const ColorGroupsScreen = (props: INavigationProps) => {
  const [groups, setGroups] = useState(COLOR_GROUPS);

  /* fetch('http://192.168.1.6:8000/colors/groups')
    .then((res) => res.json())
    .then((data) => {
      setGroups(data);
    }); */

  const renderColorGroup = (params: { item: string }) => {
    const { item } = params;
    return (
      <View style={styles.container}>
        <TouchableFeedback
          style={{ flex: 1, alignSelf: 'stretch' }}
          onPress={() => {
            props.navigation.navigate('GroupItems', {
              name: item,
            });
          }}
        >
          <View
            style={[
              styles.colorItem,
              {
                backgroundColor: item.toLowerCase(),
              },
            ]}
          >
            <Text
              style={{
                flex: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: 5,
                color: 'white',
                textAlign: 'center',
              }}
            >
              {item}
            </Text>
          </View>
        </TouchableFeedback>
      </View>
    );
  };

  return (
    <View style={{ marginTop: 5, marginBottom: 5 }}>
      <FlatList
        keyExtractor={(item, _) => item}
        data={COLOR_GROUPS}
        renderItem={renderColorGroup}
        numColumns={2}
      />
    </View>
  );
};

export default ColorGroupsScreen;

const styles = createStyle({
  container: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 10,
    margin: 10,
    ...shadow({
      rgb: '0,0,0',
      opacity: 0.3,
      radius: 10,
      offsetWidth: 0,
      offsetHeight: 2,
      elevation: 5,
    }),
  },
  colorItem: {
    flex: 1,
    height: 80,
    minHeight: 80,
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
});
