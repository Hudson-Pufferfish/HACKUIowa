import { Button, View, Text } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, clearCart, decreaseCart, removeFromCart } from '../redux/slices/cartSlice';

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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Item Screen</Text>
      <Button title="Add to Cart" onPress={() => handleAddToCart(currentProductInfo)} />
  </View>
  )
}

export default ItemScreen