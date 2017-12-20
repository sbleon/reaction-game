import React from 'react';
import { TouchableWithoutFeedback, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      circleVisible: false,
      timeVisible: false,
    }
    this.addCircle = this.addCircle.bind(this);
    this.elapsedTime = this.elapsedTime.bind(this);
    this.tapCircle = this.tapCircle.bind(this);
  }

  addCircle() {
    const startTime = new Date().getTime();
    this.setState({ circleVisible: true, startTime: startTime });
  }

  componentDidMount() {
   setTimeout(this.addCircle, 1000 + Math.random() * 2000);
  }

  elapsedTime() {
    return (this.state.endTime - this.state.startTime) + 'ms';
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
        <Text key='elapsedTime'>{this.elapsedTime()}</Text>
      )
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
});
