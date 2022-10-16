import { ImageBackground, View, Text, TouchableOpacity, Image } from 'react-native';
import { Card } from 'react-native-elements'
import React from 'react';
import { buttonStyles } from '../styles/button.styles';
import { productStyles } from '../styles/product.styles';
import { useDispatch, useSelector } from 'react-redux';


const CartScreen = ({ navigation }) => {
  const currentItems = useSelector(state => state.cart).cartItems;
  return (
    <View style={buttonStyles.screenContainer}>
      <ImageBackground source={require("../assets/images/treeBg.jpg")} style={buttonStyles.image}>
        <Card>
          {currentItems.map((item) => {
            <View key={item.id} style={productStyles.container}>
              <Image
                style={productStyles.image}
                resizeMode="cover"
                source={{ uri: item.image }}
              />
              <Text style={productStyles.name}>{item.name}</Text>
              <Text style={productStyles.carbon}>{item.carbon}</Text>
            </View>
          })}
       </Card>
      </ImageBackground>
    </View>
   )
 }

export default CartScreen