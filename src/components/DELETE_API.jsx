import { View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const DELETE_API = () => {
  const [id, setId] = useState();
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://10.0.2.2:3000/users/${id}`);
      console.log(response.data);
      setId('');
      Alert.alert('Success', 'Data deleted successfully');
      console.log(response.data);
    } catch (error) {
      Alert.alert('Error', 'Something went wrong');
      console.log(error);
    }
  };
  return (
    <View>
      <Text style={{ textAlign: 'center', fontSize: 30, marginBottom: 10 }}>
        DELETE_API
      </Text>
      <TextInput
        placeholder="Enter ID"
        value={id}
        onChangeText={value => setId(value)}
      />
      <Button title="Delete" onPress={handleDelete} />
    </View>
  );
};

export default DELETE_API;
