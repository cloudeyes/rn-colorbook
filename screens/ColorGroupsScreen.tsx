import React, { useState } from 'react';
import { Text, View, FlatList, Platform, ScrollView } from 'react-native';
import { COLOR_GROUPS } from '../data/colors';
import TouchableFeedback from '../components/TouchableFeedback';

import { useHeaderHeight } from 'react-navigation-stack';
import { getTabBarHeight } from '../navigations/TabBar';
import { Dimensions, StyleSheet } from 'react-native';
import { IStackNavigationProps } from '../navigations';

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

const ColorGroupsScreen = (props: IStackNavigationProps) => {
  const [groups, setGroups] = useState(Object.keys(COLOR_GROUPS));
  console.log('groups:', groups);

  /* fetch('http://192.168.1.6:8000/colors/groups')
    .then((res) => res.json())
    .then((data) => {
      setGroups(data);
    }); */

  /** 화면 높이 구하기 */
  const { height } = Dimensions.get('screen');
  const headerHeight = useHeaderHeight();
  const numRows = Math.round(groups.length / 2);
  const initialItemHeight =
    (height - headerHeight - getTabBarHeight() - 10) / numRows - 21;
  const [itemHeight, setItemHeight] = useState(initialItemHeight);

  const renderColorGroup = (params: { item: string }) => {
    const { item } = params;

    return !itemHeight ? null : (
      <View style={styles.colorItemWrapper}>
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
                height: itemHeight,
                minHeight: itemHeight,
              },
            ]}
          >
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  fontWeight: 'normal',
                  fontSize: 24,
                  color: 'black',
                  textShadowColor: 'rgba(255, 255, 255, 0.8)',
                  textShadowOffset: { width: 0, height: 0 },
                  textShadowRadius: 10,
                }}
              >
                {COLOR_GROUPS[item].length}
              </Text>
            </View>
            <View style={{ height: 20, justifyContent: 'flex-end' }}>
              <Text
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  padding: 5,
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                {item}
              </Text>
            </View>
          </View>
        </TouchableFeedback>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, _) => item}
        data={groups}
        renderItem={renderColorGroup}
        numColumns={2}
      />
    </View>
  );
};

export default ColorGroupsScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 5,
  },
  colorItemWrapper: {
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
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
