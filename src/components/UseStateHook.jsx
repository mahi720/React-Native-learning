import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';

const UseStateHook = () => {
  const [name, setName] = useState('radha');
  console.log(name);
  const changeName = () => {
    console.log(name);

    setName('krishna');
  };
  return (
    <View>
      <Text style={{ fontSize: 24 }}>UseStateHook</Text>
      <Text style={{ fontSize: 24 }}>Name : {name}</Text>
      <Button onPress={changeName} title="Change Name" />
    </View>
  );
};

export default UseStateHook;
