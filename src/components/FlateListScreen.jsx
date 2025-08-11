import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

// flate list data is always wrok with the array form. It is not work the another data 

const data = [
    {id: '1', name: 'Item 1'},
    {id: '2', name: 'Item 2'},
    {id: '3', name: 'Item 3'},
    {id: '4', name: 'Item 4'},
    {id: '5', name: 'Item 5'},
    {id: '6', name: 'Item 6'},
    {id: '7', name: 'Item 7'},
    {id: '8', name: 'Item 8'},
    {id: '9', name: 'Item 9'},
    {id: '10', name: 'Item 10'},
]

const FlateListScreen = () => {

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style= {styles.title}>{item.name}</Text>
        </View>
    )

  return (
    <View style ={styles.container}>
      <FlatList data={data} renderItem={renderItem}
      keyExtractor={item => item.id} contentContainerStyle = {styles.list}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f8f8',
        paddingTop: 20,
    },
    list: {
            paddingHorizontal: 39
    }, 
    item: {
        backgroundColor: 'red',
        borderColor: 'yellow',
        borderWidth: 5,
        padding: 20,
        marginVertical: 8,
        borderRadius:8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 4,
        elevation: 2,
        shadowOpacity: 0.1
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
    },
})

export default FlateListScreen