import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import { Button } from 'react-native';

const StyleWithButton = () => {
  return (
    <View>
      <Text>StyleWithButton</Text>
      <Button title="Basic Button" color={'red'} />

      {/* Bydefault activeOpacity is 0.2 */}
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonText}>Touchable Opacity</Text>
      </TouchableOpacity>

        {/* By default underlaycolor is black */}
      <TouchableHighlight
        style={styles.button} underlayColor={'#3a1078'}
        onPress={() => console.log('Touchable Highlight')}
      >
        <Text style={styles.buttonText}>Touchable Highlight</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 20,
    backgroundColor: '#4E31Aa',
    padding: 20,
    borderRadius: 25,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default StyleWithButton;
