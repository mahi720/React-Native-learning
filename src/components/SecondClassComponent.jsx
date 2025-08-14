import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

class SecondClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      myName: 'Sonu',
    };
  }

    //this is method not a function. in class components, fuction are callled method.
  updateName = () => {
    this.setState({myName: "Mahi"})
  }

  render() {
    return (
      <View>
        <Text> Name: {this.state.myName} Age: {this.props.data} </Text>
        <Button title = "Update Name"  onPress={this.updateName} />
      </View>
    );
  }
}

export default SecondClassComponent;
