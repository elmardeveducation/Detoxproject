import React, { Component } from 'react';
import { Text } from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: 'Jordan Belfort'
    }
  }

  getData=()=>{
    setTimeout(() => {
      console.log('Our data is fetched');
      this.setState({
        data: 'Hello WallStreet'
      })
    }, 1000)
  }

  componentDidMount(){
    this.getData();
console.log("DidMount started")

  }

  render() {
    return(
      <Text>
      {this.state.data}
    </Text>
    )
  }
}