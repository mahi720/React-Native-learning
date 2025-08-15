import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Loader = () => {
    
    const [loading, setLoading] = useState(false)
    const toggleLoader = () => {
        setLoading(!loading)
    }

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>Loader</Text>
      {/* <ActivityIndicator size={'large'} color={'red'} /> */}
      <TouchableOpacity style={styles.button} onPress={toggleLoader}>
        <Text style={styles.buttonText}>{loading ? "Hide Loader" : "Show Loader"}</Text>
      </TouchableOpacity>
      {
        loading && (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size={'large'} color={'red'} />
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    button: {
        paddingVertical:12,
        paddingHorizontal: 20,
        backgroundColor: 'red',
        borderRadius: 10,
        marginBottom: 20
    }, 
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    loaderContainer:{
        width: 120,
        height: 120,
        backgroundColor: '#fff',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        elevation: 5
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: 'red',
        fontWeight: '600'
    }
})

export default Loader