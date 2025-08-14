// mounting phase , in functional components life cycle is useEffect hook, mounting, updating, unmounting all are in useEffect. This is basically use for mounting purpose.

import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("This is use effect hook1");
    }, [])

  return (
    <View>
      <Text style={{fontSize: 30}}>UseEffect Hook</Text>
      <Text style={{fontSize: 30}}>Count: {count}</Text>
      <Button title='Increment' onPress={() => setCount(count +1)} />
    </View>
  )
}

export default UseEffect