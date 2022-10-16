import {Button, View, Text } from 'react-native'
import React from 'react'

const CartScreen = ({ navigation }) => {
  return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text>Cart Screen</Text>
       <Button title="View Item" onPress={() => navigation.navigate('Item')}/>
     </View>
   )
 }

export default CartScreen