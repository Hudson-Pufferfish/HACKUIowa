import { Button, View, Text } from 'react-native'
import React from 'react'

const ItemScreen = ( {navigation} ) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Item Screen</Text>
      <Button title="Add to Cart" onPress={() => navigation.navigate('Cart')} />
  </View>
  )
}

export default ItemScreen