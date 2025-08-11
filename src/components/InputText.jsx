import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const InputText = () => {
  const [username, setUsername] = useState('');

  const handleUsername = (text) => {
    setUsername(text);
  };

  const clearUsername = () => {
        setUsername('');
  }

  return (
    <View>
      <Text style={{ fontSize: 30 }}>InputText</Text>
      <Text style={{ fontSize: 20 }}>Username : {username}</Text>
      <TextInput
        style={{
          fontSize: 20,
          borderWidth: 3,
          borderColor: 'blue',
          margin: 10,
        }}
        value={username}
        onChangeText={handleUsername}
        placeholder="Enter your username"
      />
      <Button title='Clear' onPress={clearUsername} />
    </View>
  );
};

export default InputText;
