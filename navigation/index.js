import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    HomeScreen,
    CameraScreen,
    ItemScreen,
    CartScreen,
    ActionScreen,
} from '../screens';

const HomeStack = createNativeStackNavigator();
const CartStack = createNativeStackNavigator();
const BottomTabBar = createBottomTabNavigator();

function HomeStackScreen () {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Camera" component={CameraScreen} />
            <HomeStack.Screen name="Item" component={ItemScreen} />
        </HomeStack.Navigator>
    );
}

function CartStackScreen () {
    return (
        <CartStack.Navigator>
            <CartStack.Screen name="Cart" component={CartScreen} />
            <CartStack.Screen name="Item" component={ItemScreen} />
        </CartStack.Navigator>
    );  
}



const AppNavigation = () => {
    return (
      <BottomTabBar.Navigator screenOptions={{ headerShown: false }}>
        <BottomTabBar.Screen name="Home" component={HomeStackScreen} />
        <BottomTabBar.Screen name="Cart" component={CartStackScreen} />
        <BottomTabBar.Screen name="Action" component={ActionScreen} />
      </BottomTabBar.Navigator>
    )
}

export default AppNavigation