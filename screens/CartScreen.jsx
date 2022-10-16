import { Button, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { buttonStyles } from '../styles/button.styles';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={buttonStyles.appButtonContainer}>
    <Text style={buttonStyles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const CartScreen = ({ navigation }) => {
  return (
     <View style={buttonStyles.screenContainer}>
       <AppButton title="View Item" size="sm" backgroundColor="#007bff" onPress={() => navigation.navigate('Item')}/>
     </View>
   )
 }

export default CartScreen