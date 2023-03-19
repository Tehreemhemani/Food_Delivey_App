import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Homescreen from '../Screens/Homescreen'
import Searchscreen from "../Screens/Searchscreen"
import MyOrdersScreen from "../Screens/MyOrdersScreen"
import MyAccountScreen from "../Screens/MyAccountScreen"
import { colors } from "../Global/Style"
import { Icon } from 'react-native-elements'
import { ClientStack } from './ClientStack'

const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs() {
  return (
    <ClientTabs.Navigator
      tabBarOptions={{ activeTintColor: colors.buttons }} >

      <ClientTabs.Screen
        name="Homescreen"
        component={Homescreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon
              name='home'
              type='material'
              color={color}
              size={size} />)
        }} />


      <ClientTabs.Screen
        name="Searchscreen"
        component={ClientStack}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <Icon
              name='search'
              type='material'
              color={color}
              size={size} />)
        }} />

      <ClientTabs.Screen
        name="MyAccountScreen"
        component={MyAccountScreen}
        options={{
          tabBarLabel: "My Account",
          tabBarIcon: ({ color, size }) => (
            <Icon
              name='person'
              type='material'
              color={color}
              size={size} />)
        }} />

      <ClientTabs.Screen
        name="MyOrdersScreen"
        component={MyOrdersScreen}
        options={{
          tabBarLabel: "My Orders",
          tabBarIcon: ({ color, size }) => (
            <Icon
              name='view-list'
              type='material'
              color={color}
              size={size} />)
        }} />


    </ClientTabs.Navigator>

  )
}









