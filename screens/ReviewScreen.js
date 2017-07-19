import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      title: 'Review Jobs',
      headerRight: (
        <Button
          backgroundColor="rgba(0,0,0,0)"
          color="rgba(0, 122, 255, 1)"
          title="Settings"
          onPress={() => navigate('setting')}
        />
      )
    };
  };
  render() {
    return (
      <View style={styles.container}>
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
