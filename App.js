import React from 'react';
import { View, Text, StatusBar, StyleSheet} from 'react-native';
import RootNavigator from "./src/Navigation/RootNavigation";
import  {SignInContextProvider} from "./src/Contexts/authContexts"
import {colors} from "./src/Global/Style";

export default function App(){
  return(
    <SignInContextProvider>
    <View style = {styles.container}>
      {/* <StatusBar 
        barStyle = "light-content"
        backgroundColor = {colors.statusbar}
      /> */}
   
        <RootNavigator />
     
    </View>
      </SignInContextProvider>  
  
  )
}

const styles = StyleSheet.create({
  container: {flex:1}
})
    


