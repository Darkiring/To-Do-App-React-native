/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// Store Provider
import {Provider} from 'mobx-react';

// Store
import Task from './src/store/Task';

// Component MainNavigator
import MainNavigator from './src/navigation/MainNavigator';

// Ref for navigation in all screens
import {navigationRef} from './src/navigation/RootNavigator.js';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Provider TaskStore={Task}>
        <MainNavigator />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
