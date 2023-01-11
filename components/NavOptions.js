import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    {
        id: "456",
        title: "Order Food",
        image: "https://links.papareact.com/28w",
        screen: "EatScreen"
    }
]

const NavOptions = () => {
  return (
    <FlatList 
    data={data}
    keyExtractor={(item)=> item.id}
    horizontal
    renderItem={({item})=> (
        <TouchableOpacity
        className="p-4 pl-6 pb-8 pt-4 bg-gray-200"
        >
            <View>
                <Image 
                style={{ width:120, height:120, resiseMode:'contain' }}
                source={{ uri: item.image}}
                />
            </View>
            <Text>{item.title}</Text>
        </TouchableOpacity>
    ) }le
    />
    
  )
}

export default NavOptions
