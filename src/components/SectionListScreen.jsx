import { View, Text, SectionList, StyleSheet } from 'react-native'
import React from 'react'

const listItems = [
  {
    title: 'Fruits',
    data: [
      { id: '1', name: 'Apple' },
      { id: '2', name: 'Banana' },
      { id: '3', name: 'Orange' },
      { id: '4', name: 'Mango' },
      { id: '5', name: 'Grapes' },
    ],
  },

  {
    title: 'Vegetables',
    data: [
      { id: '6', name: 'Carrot' },
      { id: '7', name: 'Potato' },
    //   { id: '8', name: 'Tomamto' },
    //   { id: '9', name: 'Onion' },
    //   { id: '10', name: 'Oil' },
    ],
  },
];

const SectionListScreen = () => {
    const renderItem = ({ item }) => (
        
        <View style = {styles.item}>
            <Text style={styles.title}>{item.name}</Text>
        </View>
        );
    
    const renderSectionHeader = ({ section }) => (
        <View style = {styles.header}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{section.title}</Text>
        </View>
    );

  return (
    <View style = {styles.container}>
      <Text><SectionList 
      sections={listItems}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
        keyExtractor={(item) => item.id}
      /></Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f8f8',
        paddingTop: 20,
    },
    item: {
            backgroundColor: '#add8e6',
            padding: 10,
            marginVertical: 5,
            borderRadius: 5,
    },
    title: {
        fontSize: 19,
    },
    header: {
        backgroundColor: '#90ee90',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    }
})

export default SectionListScreen