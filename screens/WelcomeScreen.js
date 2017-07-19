import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to JobApp', color: '#03A9F4' },
  { text: 'Use this to get a job', color: '#009688' },
  { text: 'Set your location, then swipe away', color: '#03A9F4' }
];

const IMAGE_DATA = [
  {
    url: 'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/17/13/03/55/6bfc0bcd-76d6-4f46-a644-5c041e1db59c/file.jpg'
  },
  {
    url: 'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/17/13/03/07/8b37eae3-4b58-4b83-a2de-0c8e6477dd15/file.jpg'
  },
  {
    url: 'https://d3ecxtcn6f07wu.cloudfront.net/2017/07/18/15/09/06/953d20fd-537f-41c5-a5a5-9562871f2619/file.jpg'
  }
];

export default class WelcomeScreen extends Component {
  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  };

  render() {
    return (
      <View style={styles.container}>
        <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
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
