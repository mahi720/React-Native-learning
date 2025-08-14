import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const RegisterForm = () => {
    const [username, setUsername]=useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleRegister = () => {
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Registration Successful");

        setEmail("")
        setPassword("")
        setUsername("")
    }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCorrect={false}
        autoCapitalize="none"
        placeholderTextColor="#999"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholderTextColor="#999"
      />

      <TextInput 
      style={styles.input}
      placeholder='Password'
      value={password}
      onChangeText={setPassword}
      placeholderTextColor="#999"
      secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#7A7A73',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#E1E9C9',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RegisterForm