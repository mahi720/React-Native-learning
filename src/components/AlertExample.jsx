import { View, Text, Button, Alert } from 'react-native';
import React from 'react';

const showAlert = () => {
  Alert.alert(
    'Alert Title',
    'Alert Message',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => console.log('OK Pressed'),
      },
    ],
    { cancelable: false },
  );
};

const AlertExample = () => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>AlertExample</Text>
      <Button title="Show Alert" onPress={showAlert} />
    </View>
  );
};

export default AlertExample;
