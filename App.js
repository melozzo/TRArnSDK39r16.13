import 'react-native-gesture-handler'; // arcane bit of react-navigation
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/components/RootNavigation';
import {Provider} from 'react-redux';
import mapReducer from './src/redux-store/reducers/map-reducer';
import siteReducer from './src/redux-store/reducers/site-reducer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { StyleSheet } from 'react-native';

export default function App() {
     
      const rootReducer = combineReducers(mapReducer, siteReducer)
      const store = createStore(rootReducer)
   

      return (
            <Provider store={store}>
                  <NavigationContainer>
                        <RootNavigation />
                  </NavigationContainer>
            </Provider>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
