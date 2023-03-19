import React from 'react';
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import Loginscreen from "../Screens/Auth/Loginscreen";
import LoginWelcomeScreen from '../Screens/Auth/LoginWelcomeScreen';
import Homescreen from '../Screens/Homescreen';
import RestaurantMapScreen from '../Screens/RestaurantMapScreen';
import RootClientTabs from './ClientTabs';
import SignUpScreen from '../Screens/Auth/SignUpScreen';

const Auth = createStackNavigator();

export default function AuthStack() {
   return (

      <Auth.Navigator>
         <Auth.Screen
            name="LoginWelcomeScreen"
            component={LoginWelcomeScreen}
            options={{
               headerShown: false,
               ...TransitionPresets.RevealFromBottomAndroid
            }} />


         <Auth.Screen
            name="Loginscreen"
            component={Loginscreen}
            options={{
               headerShown: false,
               ...TransitionPresets.RevealFromBottomAndroid
            }} />

         <Auth.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={{
               headerShown: false,
               ...TransitionPresets.RevealFromBottomAndroid
            }} />


         {/* <Auth.Screen
    name = "RootClientTabs"
    component= {RootClientTabs}
    options = {{
             headerShown:false,
          ...TransitionPresets.RevealFromBottomAndroid }}/>


<Auth.Screen
    name = "RestaurantMapScreen"
    component= {RestaurantMapScreen}
    options = {{
             headerShown:false,
          ...TransitionPresets.RevealFromBottomAndroid }}/>  */}


      </Auth.Navigator>


   )
}
