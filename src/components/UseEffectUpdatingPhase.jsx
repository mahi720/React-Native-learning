import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffectUpdatingPhase = () => {
    const [counter, setCounter] = useState(0);
    const [score, setScore] = useState(20);
    const [multiply, setMultiply] = useState(2);

    useEffect(() => {
        console.log("This is render for counter and multiply");
    }, [counter, multiply])

    useEffect(() => {
        console.log("This is render only for score");
    }, [score])

  return (
    <View>
      <Text style={{fontSize: 30, marginBottom: 10}}>UseEffectUpdatingPhase</Text>
      <Text style={{fontSize: 30, marginBottom: 10}}>Counter: {counter}</Text>
      <Text style={{fontSize: 30, marginBottom: 10}}>Score: {score}</Text>
      <Text style={{fontSize: 30, marginBottom: 10}}>Multiply: {multiply}</Text>
      <Button title="Increment Counter" onPress={() => setCounter(counter + 1)} />
      <Text></Text>
      <Button title="Increment Score" onPress={() => setScore(score + 10)} />
      <Text></Text>
      <Button title="Multiply" onPress={() => setMultiply(multiply * 3)} />
    
    {/* this is create another component and use props */}
     <InfoDetails count={counter} score={score} />
    </View>
  )
}

//this is create another component and use props 
const InfoDetails = ({count, score}) => {

    useEffect(() => {
        console.log("I'm a child component");
    }, [count])
    return(
        <View>
            <Text style={{fontSize: 30, marginTop: 10}}>Info Details</Text>
            <Text style={{fontSize: 30, marginTop: 10}}>Count: {count}</Text>
            <Text style={{fontSize: 30, marginTop: 10}}>Score: {score}</Text>
        </View>
    )
}

export default UseEffectUpdatingPhase