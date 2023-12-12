import React, {FunctionComponent} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import LoginOrSignUp from './src/screens/authFlow/LoginOrSignUp'
import HomeScreen from './src/screens/appFlow/HomeScreen'
import MenuScreen from './src/screens/appFlow/MenuScreen'
import CheckoutScreen from './src/screens/appFlow/CheckOutScreen'

type NavigationProps = {}

const AppStack = createNativeStackNavigator()

const Navigation: FunctionComponent<NavigationProps> = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false, headerTransparent: true}} initialRouteName="LoginOrSignUp">
                <AppStack.Screen name="LoginOrSignUp" component={LoginOrSignUp} options={{headerShown: false}} />
                <AppStack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}} />
                <AppStack.Screen name="MenuScreen" component={MenuScreen} options={{headerShown: false}} />
                <AppStack.Screen name="CheckoutScreen" component={CheckoutScreen} options={{headerShown: false}} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
