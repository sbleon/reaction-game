import React from 'react';
import { Button, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      circleVisible: false,
      timeVisible: false,
    };
    this.addCircle = this.addCircle.bind(this);
    this.elapsedTime = this.elapsedTime.bind(this);
    this.reset = this.reset.bind(this);
    this.tapCircle = this.tapCircle.bind(this);
    this.startGame = this.startGame.bind(this);
  }

  addCircle() {
    const startTime = new Date().getTime();
    this.setState({ circleVisible: true, startTime: startTime });
  }

  componentDidMount() {
    this.startGame();
  }

  elapsedTime() {
    return (this.state.endTime - this.state.startTime) + 'ms';
  }

  reset() {
    this.setState({ circleVisible: false, timeVisible: false });
    this.startGame();
  }

  startGame() {
    setTimeout(this.addCircle, 1000 + Math.random() * 2000);
  }

  tapCircle() {
    const endTime = new Date().getTime();
    this.setState({ circleVisible: false, endTime: endTime, timeVisible: true });
  }

  render() {
    let children = [];
    if (this.state.circleVisible) {
      children.push(
        <TouchableWithoutFeedback key='circle' onPress={this.tapCircle}>
          <View style={styles.circle} />
        </TouchableWithoutFeedback>
      );
    }
    if (this.state.timeVisible) {
      children.push(
        <Text key='elapsedTime' style={styles.elapsedTime}>{this.elapsedTime()}</Text>
      );
      children.push(
        <Button key='button' title='Reset' onPress={this.reset} />
      );
    }

    return (
      <View style={styles.container} id="container">
        {children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    backgroundColor: 'red',
    borderRadius: 50,
    height: 100,
    width: 100,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  elapsedTime: {
    fontSize: 30
  },
});
