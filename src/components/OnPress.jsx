import { View, Text, Button } from 'react-native';
import React from 'react';

const OnPress = () => {
  let firstName = 'somam';
  // without parameters
  const getName = () => {
    console.log('Hello Mahi');
  };

  // with parameters
  const getName1 = name => {
    console.log('Name: ', name);
  };

  const updateName = () => {
    console.log(firstName);
    firstName = 'rohit';
    console.log('Updated Name: ', firstName);
    
  };

  return (
    <View>
      <Text>OnPress11</Text>
      <Button title="press11" onPress={getName} />
      <Text>OnPress1222</Text>
      <Button title="press12" onPress={() => getName1('Sonu')} />
      <Text>{firstName}</Text>
      <Button title="updateName" onPress={updateName} />
    </View>
  );
};

export default OnPress;
