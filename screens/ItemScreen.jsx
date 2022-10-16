import { ImageBackground, Button, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { buttonStyles } from '../styles/button.styles';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, clearCart, decreaseCart, removeFromCart } from '../redux/slices/cartSlice';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={buttonStyles.appButtonContainer}>
    <Text style={buttonStyles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);
const ItemScreen = ( {navigation, route} ) => {
  const dispatch = useDispatch();
  const producState = useSelector(state => state.product);
  const cartState = useSelector(state => state.cart);
  const currentCode = route.params.barcode;
  const currentProductInfo = producState.find(p => {
    return p.barcode == currentCode;
  });

  const handleAddToCart = (product) => {
    dispatch(addToCart(currentProductInfo));
  };
  return (
    <View style={buttonStyles.screenContainer}>
    <ImageBackground source={require("../assets/images/treeBg.jpg")} style={buttonStyles.image}>
      <AppButton title="Add to Cart" size="sm" backgroundColor="#007bff" onPress={() => handleAddToCart(currentProductInfo)}/>
    </ImageBackground>
  </View>
  )
}

export default ItemScreen