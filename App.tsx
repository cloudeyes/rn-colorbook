import React from 'react';
import MainNavigator from './navigations';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { enableScreens } from 'react-native-screens';
import colorsReducer from './store/reducers/colors';
import { Platform } from 'react-native';

if (Platform.OS !== 'web') {
  enableScreens();
}

const rootReducer = combineReducers({
  colors: colorsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
