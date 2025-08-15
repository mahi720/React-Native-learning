import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';

const PressableComponentButton = () => {
  const handlePress = () => {
    console.log('Button pressed');
  };
  const handlePressIn = () => {
    console.log('Button pressed In');
  };
  const handlePressOut = () => {
    console.log('Button pressed Out');
  };
  const handlePressLong = () => {
    console.log('Button pressed Long');
  };

  return (
    <View style={styles.container}>
      <Text>PressableComponentButton</Text>
      <Pressable 
    //   onPress={handlePress}
    // onPressIn={handlePressIn}
    onPressOut={handlePressOut}
    onLongPress={handlePressLong}  //by defalut 500 milisecond
    delayLongPress={5000} // use for 5 sec
      style={styles.button}>
        <Text style={styles.buttonText}>Press me</Text>
      </Pressable>
    </View>
  );
};

export default PressableComponentButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});
