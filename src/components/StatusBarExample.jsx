import { View, Text, StatusBar, StyleSheet } from 'react-native'
import React from 'react'

const StatusBarExample = () => {
  return (
    <View style={styles.container}>
        <StatusBar 
         barStyle={'light-content'}
        //  backgroundColor={'red'}
         backgroundColor="rgba(0,0,0,0.2)"
         translucent={true}
        //  hidden={true} 
        />
      <Text style={styles.text}>StatusBarExample</Text>

    </View>
  )
}

export default StatusBarExample

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#6200fe',
    alignItems: 'center',
    justifyContent: 'center',
    },
    text:{
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    }
  });
  