import React from 'react';
import { TabNavigator } from 'react-navigation';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';

import { StackNavigator } from 'react-navigation';

const App = TabNavigator({
  auth: { screen: AuthScreen },
  welcome: { screen: WelcomeScreen }
});

export default App;
