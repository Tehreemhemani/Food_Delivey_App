import React ,{useState,useRef,useContext,useEffect} from 'react';
import { View, Text, StatusBar, StyleSheet, TextInput, Image} from 'react-native';
import {colors,parameters,title,} from "../../Global/Style";
import {Icon,Button,SocialIcon} from "react-native-elements";
import Swiper from 'react-native-swiper';
import { SignInContext } from "../../Contexts/authContexts"
import auth from "@react-native-firebase/auth"

export default function LoginWelcomeScreen({navigation}){

     // <<<<<<<<<<<<<<<<<<<<<<LogOut/SignOut FUNCTION >>>>>>>>>>>>>>>>>>>>>>>


//   const {dispatchSignedIn} = useContext(SignInContext)

// useEffect(()=>{
//   auth().onAuthStateChanged((user)=>{
//     if(user){
//       dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:"signed-in"}})
//     }else{
//       dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:null}})
//     }
//   })
  
// },[])

return(

    /* <<<<<<<<<<<<<<<<<<<<<<<<<<<TEXT>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */

<View style={{flex:1}}>

<View style={{flex:3,justifyContent:"flex-start",alignItems:"center",paddingTop:20}}>
<Text style={{fontSize:26,color:colors.buttons,fontWeight:"bold"}}>DISCOVER RESTAURANTS</Text>
<Text style={{fontSize:26,color:colors.buttons,fontWeight:"bold"}}>IN YOUR AREA</Text>
</View>

   {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<SLIDER>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  */}

<View style={{flex:4,justifyContent:"center"}}>
<Swiper autoplay ={true}>
<View style={styles.slide1}>
<Image
  source={{uri:"http://www.pakistanichefrecipes.com/wp-content/uploads/2020/11/Chicken-pepper-steak-500x500.jpg"}}
  style={{height:"100%",width:"100%"}}/>
</View>

<View style={styles.slide2}>
<Image
  source={{uri:"https://www.kitchensanctuary.com/wp-content/uploads/2021/11/Buffalo-Chicken-Pasta-square-FS-5.jpg"}}
  style={{height:"100%",width:"100%"}}/>
</View>

<View style={styles.slide3}>
<Image
  source={{uri:"https://www.indianhealthyrecipes.com/wp-content/uploads/2016/07/chicken-pasta.jpg"}}
  style={{height:"100%",width:"100%"}}/>
</View>
</Swiper>
 </View>

      {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<BUTTON>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

<View style={{flex:4,justifyContent:"flex-end",marginBottom:20}}> 
<View style={{marginHorizontal:20,marginTop:30}}>
  <Button
    title = "Sign In"
    buttonStyle={parameters.styledButton}
    titleStyle={parameters.buttonTitle} 
    onPress={()=>{
      navigation.navigate('Loginscreen')}}/>
 </View>

     {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<BUTTON>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

<View style={{marginHorizontal:20,marginTop:30}}>
  <Button
     title = "Create an account"
     buttonStyle={styles.createButton}
     titleStyle={styles.createButtonTitle} 
     onPress ={()=>{navigation.navigate("SignUpScreen")}}/>
</View>
  </View> 
     </View>
)}

    // ...............<<<<<<<<<<<<<StyleSheet>>>>>>>>>>>>>>>>>..............


const styles = StyleSheet.create({

slide1: {
  height:250,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#9DD6EB'
},

slide2: {
  height:250,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#97CAE5'
},

slide3:{
  height:250,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#92BBD9'
},

createButton:{
  backgroundColor:"white",
  alignContent:"center",
  justifyContent:"center",
  borderRadius:12,
  borderWidth:1, 
  borderColor:"#ff8c52",
  height:50,
  paddingHorizontal:20,
  borderColor:colors.buttons,
},

createButtonTitle: {
  color:colors.grey1,
  fontSize:20,  
  fontWeight:"bold" ,
  alignItems:"center",
  justifyContent:"center"  ,
  marginTop:-3
}

})