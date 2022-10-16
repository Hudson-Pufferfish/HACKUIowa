import { ImageBackground, Button, View, Text, TouchableOpacity } from 'react-native';
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
      <ImageBackground source={require("../assets/images/treeBg.jpg")} style={buttonStyles.image}>
        <AppButton title="Item 1" size="sm" backgroundColor="#007bff"/>
        <AppButton title="Item 2" size="sm" backgroundColor="#007bff"/>
        <AppButton title="Item 3" size="sm" backgroundColor="#007bff"/>
        <AppButton title="Item 4" size="sm" backgroundColor="#007bff"/>
      </ImageBackground>
    </View>
   )
 }

export default CartScreen