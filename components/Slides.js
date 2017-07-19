import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class Slides extends Component {
  renderLastSlide(i) {
    if (i === this.props.data.length - 1) {
      return <Button title="Onwards!" raised buttonStyle={styles.buttonStyle} onPress={this.props.onComplete} />;
    }
  }

  renderSlides() {
    return this.props.data.map((slide, i) => {
      return (
        <View key={slide.text} style={[styles.slideStyle, { backgroundColor: slide.color }]}>
          <Text style={styles.textStyle}>
            {slide.text}
          </Text>
          {this.renderLastSlide(i)}
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView horizontal pagingEnabled style={{ flex: 1 }}>
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  textStyle: {
    fontSize: 30,
    color: 'white'
  },
  buttonStyle: {
    backgroundColor: '#0288D1',
    marginTop: 15,
    alignItems: 'center',
    borderRadius: 5
  }
});
