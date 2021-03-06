import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }

  shouldComponentUpdate(nextProps, nextState) {
    
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <View>
        <Button
        title='clickme'
          color={this.props.color}
          onPress={() => this.setState(state => ({count: state.count + 1}))}
        />
        <Text>Count: {this.state.count}</Text>
      </View>
    );
  }
}

export default App;
