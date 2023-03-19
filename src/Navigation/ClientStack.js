import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Searchscreen from "../Screens/Searchscreen"
import SearchResultScreen from "../Screens/SearchResultScreen"
import RestaurantHomeScreen from '../Screens/RestaurantHomeScreen';
import MenuProductScreen from "../Screens/MenuProductScreen"
import PreferenceScreen from "../Screens/PreferenceScreen"



const ClientSearch = createStackNavigator()

export function ClientStack() {



    return (
        <ClientSearch.Navigator>

            <ClientSearch.Screen
                name="Searchscreen"
                component={Searchscreen}
                options={
                    () => ({
                        headerShown: false
                    })
                }
            />

            <ClientSearch.Screen
                name="SearchResultScreen"
                component={SearchResultScreen}
                options={
                    () => ({
                        headerShown: false
                    })
                }
            />


            <ClientSearch.Screen
                name="RestaurantHomeScreen"
                component={RestaurantHomeScreen}
                options={
                    () => ({
                        headerShown: false
                    })
                }
            />

            <ClientSearch.Screen
                name="MenuProductScreen"
                component={MenuProductScreen}
                options={
                    () => ({
                        headerShown: false
                    })
                }
            />

            <ClientSearch.Screen
                name="PreferenceScreen"
                component={PreferenceScreen}
                options={
                    () => ({
                        headerShown: false
                    })
                }
            />

        </ClientSearch.Navigator>
    )
}


