import { View, Text, Alert, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const PUT_API = () => {
  const [formData, setFormData] = useState({ id: '', name: '', email: '' });

  const handleInput = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `http://10.0.2.2:3000/users/${formData.id}`,
        {
          name: formData.name,
          email: formData.email,
        },
      );
      Alert.alert('Success', 'Data updated successfully');
      console.log(response.data);

      setFormData({ id: '', name: '', email: '' });
    } catch (error) {
      Alert.alert('Error', 'Something went wrong');
      console.log(error);
    }
  };

  return (
    <View>
      <Text style={{ fontSize: 30, marginBottom: 10, textAlign: 'center' }}>
        PUT_API
      </Text>
      <TextInput
        placeholder="Enter ID"
        value={formData.id}
        onChangeText={value => handleInput('id', value)}
      />
      <TextInput
        placeholder="Enter Name"
        value={formData.name}
        onChangeText={value => handleInput('name', value)}
      />
      <TextInput
        placeholder="Enter Email"
        value={formData.email}
        onChangeText={value => handleInput('email', value)}
      />
      <Button title="Submit" onPress={handleUpdate} />
    </View>
  );
};

export default PUT_API;
