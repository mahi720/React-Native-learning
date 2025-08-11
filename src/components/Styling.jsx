import { View, Text,StyleSheet } from 'react-native';
import React from 'react';
import styles from '../style/style'; // Importing external styles

const Styling = () => {
  return (
    <View>

        {/* Inline styling example */}
      <Text style={{ fontSize: 20, backgroundColor: 'red', color: 'white' }}>
        Inline Styling Example
      </Text>

        {/* External styling example */}
      <Text style={style.text}>
        Internal Styling Example
      </Text>

        {/* Using styles from an external stylesheet */}
      <Text style={styles.text}>
        External Styling Example
      </Text>

      {/* mix styling exmaple */}
      {/* first priority is inline styling, second internal styling, and third external styling */}
      <Text style={[styles.text , style.text ,{backgroundColor: 'green'}]}>
        Mix Styling Example
      </Text>
    </View>
  );
};

//internal styling
const style = StyleSheet.create({
    text: {
        color: 'white',
        backgroundColor: 'blue',
        fontSize: 20,
        marginVertical: 10,
        padding: 6,
        borderColor: 'lightgray',
        borderWidth: 1,
        textAlign: 'center',
    }
})

export default Styling;
