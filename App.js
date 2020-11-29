import 'react-native-gesture-handler'; // arcane bit of react-navigation
import * as React from 'react';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/components/RootNavigation';
import {Provider} from 'react-redux';
import mapReducer from './src/redux-store/reducers/map-reducer';
import siteReducer from './src/redux-store/reducers/site-reducer';
import authReducer from './src/redux-store/reducers/auth-reducer';

import { StyleSheet } from 'react-native';

export default function App() {
     
      const rootReducer = combineReducers({map:mapReducer, site:siteReducer, auth: authReducer})
      const store = createStore(rootReducer, applyMiddleware(thunk))
   

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
