import { View, Text, FlatList, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GET_API_LIST = () => {
  const [mydata, setMydata] = useState([]);
  useEffect(() => {
    axios.get('http://10.0.2.2:3000/users').then(response => {
      setMydata(response.data);
      console.log(response.data);
    });
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.email}>{item.email}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, marginBottom: 20, textAlign: 'center' }}>
        GET_API_LIST
      </Text>
      <Text style={styles.header}>Users</Text>
      <FlatList
        data={mydata}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default GET_API_LIST;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
    borderLeftWidth: 5,
    borderLeftColor: '#00796b',
    borderRightColor: '#004d40',
    borderRightWidth: 3,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#004d40',
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    fontWeight: '600',
    color: '#00796b',
  },
});
