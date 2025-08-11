import { View, Text } from 'react-native'
import React from 'react'

const Child = (props) => {
    // console.log(props.data);
    let newData = props.data
    let newItem = props.item
    
  return (
    <View>
      <Text style = {{fontSize: 30}}>Child</Text>
      <Text style = {{fontSize: 30}}>Count = {newData}</Text>
      <Text style = {{fontSize: 30}}>Item = {newItem}</Text>
    </View>
  )
}

export default Child