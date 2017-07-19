import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Button } from 'react-native-elements';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import DeckScreen from './screens/DeckScreen';
import MapScreen from './screens/MapScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';

const Nav = TabNavigator({
  auth: { screen: AuthScreen },
  welcome: { screen: WelcomeScreen },
  main: {
    screen: TabNavigator({
      map: { screen: MapScreen },
      deck: { screen: DeckScreen },
      review: {
        screen: StackNavigator({
          review: { screen: ReviewScreen },
          setting: { screen: SettingsScreen }
        })
      }
    })
  }
});

export default class App extends Component {
  render() {
    return <Nav />;
  }
}
