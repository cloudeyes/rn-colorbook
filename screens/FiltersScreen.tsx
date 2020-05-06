import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { useSelector } from 'react-redux';
import { IDrawerNavigationProps } from '../navigations';

interface IFilterItermProps {
  name: string;
  onChange: (name: string, value: boolean) => any;
}

const FilterItem = (props: IFilterItermProps) => {
  const [enabled, setEnabled] = useState(false);
  const onValueChange = (value: boolean) => {
    setEnabled(value);
    props.onChange(props.name, value);
  };
  return (
    <View style={styles.item}>
      <Text style={styles.itemLabel}>{props.name}</Text>
      <Switch value={enabled} onValueChange={onValueChange} />
    </View>
  );
};

const filterNames = ['Dark', 'Light', 'Deep', 'Hot', 'Aqua'];

const FiltersScreen = (props: IDrawerNavigationProps) => {
  const { navigation } = props;
  const [filters, setFilters] = useState({});

  const onFilterChange = (name: string, value: boolean) => {
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
  };

  const saveFilters = useCallback(() => {
    // console.log('setParams:', filters);
  }, [filters]);

  useEffect(() => {
    navigation.setParams({ filters });
  }, [saveFilters]);

  return (
    <View style={styles.container}>
      {filterNames.map((name) => (
        <FilterItem key={name} name={name} onChange={onFilterChange} />
      ))}
    </View>
  );
};

export default FiltersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  itemLabel: {},
});
