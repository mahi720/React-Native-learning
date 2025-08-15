import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useRef } from 'react'

const UseRefHook = () => {
    const myRef = useRef();
    const handleRef = () => {
    //    myRef.current.setNativeProps({
    //     text: 'Sonu Mahi',
    //     style: {color: 'white', backgroundColor: 'red'}
    //    })

    //use for typing cursor on
    //    myRef.current.focus()
    }
  return (
    <View style={styles.contianer}>
      <Text style={{fontSize: 30, paddingBottom: 40,  fontWeight: 'bold'}}>UseRefHook</Text>
      <TextInput 
      ref={myRef}
        style={styles.input}
        placeholder='Enter your text'
        placeholderTextColor="#999"
      />
      <TouchableOpacity style={styles.button} onPress={handleRef}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default UseRefHook

const styles = StyleSheet.create({
    contianer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 20
    },
    button: {
        backgroundColor: '#7A7A73',
        paddingVertical: 15,
       justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 50,
        borderRadius: 10,
    },
    buttonText: {
        color: '#E1E9C9',
        fontSize: 18,
        fontWeight: 'bold',
    },

})