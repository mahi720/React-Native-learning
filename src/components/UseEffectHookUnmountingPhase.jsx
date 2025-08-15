import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffectHookUnmountingPhase = () => {
    const [showChild, setShowChild] = useState(true)
  return (
    <View>
      <Text>UseEffectHookUnmountingPhase</Text>
      {
        showChild ? <ChildComponent /> : null
      }
      <Button title="Toggle" onPress={() => setShowChild(!showChild)} />
    </View>
  )
}




 const ChildComponent  = () => {

    useEffect(() => {
        // console.log("I am a child component")

        // when you use Unmount then we write the code in return section.
        return() => {
            console.log("child component unmounted");
        }
    }, [])
    return (
        <View>
            <Text style={{fontSize: 30}}>child component</Text>
        </View>
    )
}

export default UseEffectHookUnmountingPhase