import { ImageBackground, Button, View, Text, TouchableOpacity, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import React from 'react';
import { buttonStyles } from '../styles/button.styles';
import { productStyles } from '../styles/product.styles';

const CartScreen = ({ navigation }) => {
  return (
    <View style={buttonStyles.screenContainer}>
      <ImageBackground source={require("../assets/images/treeBg.jpg")} style={buttonStyles.image}>
        <Card>
          {products.map((item) => {
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