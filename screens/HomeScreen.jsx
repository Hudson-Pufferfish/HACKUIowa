import { Button, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { buttonStyles } from '../styles/button.styles';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={buttonStyles.appButtonContainer}>
    <Text style={buttonStyles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const HomeScreen = ({ navigation }) => {
 return (
    <View style= {buttonStyles.screenContainer}>
      <AppButton title="Scanning" size="sm" backgroundColor="#007bff" onPress={() => navigation.push('Camera')}/>
    </View>
  )
}

export default HomeScreen