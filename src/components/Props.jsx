import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import Child from './Child';

const Props = () => {
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(11);

  const handlePress = () => {
    setCount(count + 1);
  };

  const handleItemPress = () => {
    setItem(item * 2);
  };

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Props</Text>
      <Button title="Counter" onPress={handlePress} />
      <Text style={{ fontSize: 20 }}>Item is below</Text>
      <Button title="Item" onPress={handleItemPress} />

      <Child data={count} item={item} />
    </View>
  );
};

export default Props;
