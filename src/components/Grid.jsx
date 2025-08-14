import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

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
    {id: '11', name: 'Item 10'},
    {id: '12', name: 'Item 10'},
    {id: '13', name: 'Item 10'},
    {id: '14', name: 'Item 10'},
]

const Grid = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Grid</Text>
      <ScrollView contentContainerStyle={styles.container}>
        {data.map(item => (
          <View key={item.id} style={styles.gridItem}>
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#f8f8f8'
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 20,
        color: '#000'
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10
    },
    gridItem: {
        backgroundColor: "#ff6f61",
        padding: 20,
        marginBottom: 10,
        width: '48%',
        height: 100,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',

    },
    itemText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
        textTransform: 'uppercase'
    }
})

export default Grid