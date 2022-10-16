import { Button, View, Text } from 'react-native'
import React from 'react'


const HomeScreen = ({ navigation }) => {
 return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Scanning" onPress={() => navigation.push('Camera')}/>
    </View>
  )
}

export default HomeScreen