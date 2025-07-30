import { View, Text, Button } from 'react-native';
import React from 'react';
import UseStateHook from './src/components/UseStateHook';
// import First from './src/components/First';
// import OnPress from './src/components/OnPress';

const App = () => {
  return (
    <View>
      {/* <Text style={{ fontSize: 39 }}>App</Text>
      <Text style={{ fontSize: 30 }}>App21</Text> */}
      {/* <Button title="Press Me1" /> */}
      {/* <First /> */}
      {/* <OnPress/> */}
      <UseStateHook />
    </View>
  );
};

// const Name = () => {
//   return (
//     <View>
//       <Text style={{ fontSize: 28 }}>I'm Mahi</Text>
//     </View>
//   )
// }

export default App;
