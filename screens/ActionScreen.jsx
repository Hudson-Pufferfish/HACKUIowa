import { ImageBackground, Button, View, Text, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { buttonStyles } from '../styles/button.styles';
import { useDispatch, useSelector } from 'react-redux';
TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={buttonStyles.appButtonContainer}>
    <Text style={buttonStyles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const ActionScreen = ( {navigation} ) => {
  const { cartTotalAmount: totalCarbon } = useSelector(state => state.cart);
  const calculateCarbon = parseInt(totalCarbon || 0) / 1814;
  return (
    <View style={buttonStyles.screenContainer}>
      <ImageBackground source={require("../assets/images/treeBg.jpg")} style={buttonStyles.image}>
        <AppButton title="Calculate Carbon Offset" size="sm" backgroundColor="#007bff"
          onPress={() => { Alert.alert("", ""+Number(calculateCarbon).toFixed(6)+" tree(s)")}}
        />
      </ImageBackground>
    </View>
  )
}

export default ActionScreen