import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GET_API = () => {
  const [mydata, setMydata] = useState([]);
  useEffect(() => {
    // 10.0.2.2 replace to the localhost, becasue this is not connect to the server.

    // fetch('http://10.0.2.2:3000/users').then(response => {
    //   response.json().then(result => {
    //     console.log(result);
    //   });
    // });

    axios.get('http://10.0.2.2:3000/users').then(result => {
      //   setMydata(response.data);
      //   console.log(result.data);
      setMydata(result.data);
    });
  }, []);

  return (
    <View>
      <Text style={{ fontSize: 30, marginBottom: 10 }}>GET API METHOD</Text>

      {/* fetch the data from the server */}
      {mydata.map(item => (
        <Text key={item.id} style={{ fontSize: 20, marginBottom: 10 }}>
          {item.name}
        </Text>
      ))}
    </View>
  );
};

export default GET_API;
