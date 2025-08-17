import { View, Text, Button, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const PATCH_API = () => {
  const [formData, setFormData] = useState({ id: '', name: '', email: '' });

  const handleInput = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.patch(
        `http://10.0.2.2:3000/users/${formData.id}`,
        {
          ...(formData.name && { name: formData.name }),
          ...(formData.email && { email: formData.email }),
        },
      );
      Alert.alert('Success', 'Data Updated successfully');
      setFormData({ id: '', name: '', email: '' });
      console.log(response.data);
    } catch (error) {
      Alert.alert('Error', 'Something went wrong');
      console.log(error);
    }
  };

  return (
    <View>
      <Text style={{ textAlign: 'center', fontSize: 30, marginBottom: 10 }}>
        PATCH_API
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
      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
};

export default PATCH_API;
