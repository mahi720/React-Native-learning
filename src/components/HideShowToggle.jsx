import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const HideShowToggle = () => {
    const [status, setStatus] = useState(true)
  return (
    <View>
      <Text>HideShowToggle</Text>
      {
        status ? <My /> : null
      }
      <Button title="hide" onPress={() => setStatus(false)} />
        <Text></Text>
      <Button title="show" onPress={() => setStatus(true)} />
        <Text></Text>
      <Button title="toggle" onPress={() => setStatus(!status)} />
    </View>
  )
}



const My = () => {
    return (
        <View> 
            <Text style={{fontSize:30}}>My</Text>
        </View>
    )
}

export default HideShowToggle