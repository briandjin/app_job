import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class ReviewScreen extends Component {
  static navigationOptions = {
    title: 'Review Jobs',
    headerRight: <Button title="Settings" onPress={() => this.props.navigation.navigate('setting')} />
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Settings" onPress={() => this.props.navigation.navigate('setting')} />
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
