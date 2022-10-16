import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
    HomeScreen,
    CameraScreen,
    ItemScreen,
    CartScreen,
    ActionScreen,
} from '../screens';
import { BUTTON_COLOR } from '../constants/color.constants.js';

const HomeStack = createNativeStackNavigator();
const CartStack = createNativeStackNavigator();
const ActionStack = createNativeStackNavigator();
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

function ActionStackScreen () {
    return (
        <ActionStack.Navigator>
            <ActionStack.Screen name="Action" component={ActionScreen} />
        </ActionStack.Navigator>
    );  
}



const AppNavigation = () => {
    return (
      <BottomTabBar.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, tabBarActiveTintColor: BUTTON_COLOR }}>
        <BottomTabBar.Screen 
            name="HomeTab" 
            component={HomeStackScreen} 
            options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name = "home" color={color} size={size} />
                    ),
            }}
        />
        <BottomTabBar.Screen
            name="CartTab" 
            component={CartStackScreen}
            options={{
                    tabBarLabel: "Cart",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name = "cart" color={color} size={size} />
                    ),
            }}
        />
        <BottomTabBar.Screen 
            name="ActionTab" 
            component={ActionStackScreen} 
            options={{
                    tabBarLabel: "Action",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name = "tree" color={color} size={size} />
                    ),
            }}
        />
      </BottomTabBar.Navigator>
    )
}

export default AppNavigation