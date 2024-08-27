import { 
   StyleSheet,
   Text,
   View,
   Image,
   TextInput,
   Pressable
  } from 'react-native'

import React, { useState } from 'react'

const SignupPage = () => {

  const[username ,setUsername] = useState("")
  const[emailAddress ,setemailAddress] = useState("")
  const[password2, setPassword2] = useState()
  const[password22, setPassword22] = useState()
  const[create, setCreate] = useState(true)

  return (
    <View style={styles.container}>
      <Image
      source={require('../../assets/images/signUp_icon.png')}
      style={styles.Image}/>

      <Text style={styles.SignUp}>Sign Up</Text>

      <Text>Username</Text>
      <TextInput
      placeholder='Enter your username'
      style={styles.textInputStyle}
      onChangeText={(value)=>setUsername(value)}
      />

      <Text>E-mail</Text>
      <TextInput
      placeholder='Enter your email address'
      style={styles.textInputStyle}
      onChangeText={(value)=>setemailAddress(value)}
      />

      <Text>Password</Text>
      <TextInput
      placeholder='Enter your password'
      style={styles.textInputStyle}
      onChangeText={(value2)=>setPassword2(value2)}
      secureTextEntry = {false}
      />

      <Text>Confirm Password</Text>
      <TextInput
      placeholder='Confirm your password'
      style={styles.textInputStyle}
      onChangeText={(value2)=>setPassword2(value2)}
      secureTextEntry = {true}
      />

      <Pressable 
      onPress={() => setCreate(true)}
      style={({ pressed }) => [{
        backgroundColor: pressed ? "gray" : '#1e90ff'
      },styles.button]}>

      <Text style={styles.buttonText}>Create</Text>
      
      </Pressable>


    </View>
  )
}

export default SignupPage

const styles = StyleSheet.create({
container:{
  flex:1,
  justifyContent:'center',
  alignItems:'center'
},
button:{
  borderWidth:0,
  width:"80%",
  height:50,
  borderRadius:15,
  alignItems: 'center',
  justifyContent:'center',
},
Image:{    
  width:100,
  height:100,
  marginVertical:20
},
SignUp:{
  fontWeight:'bold',
  marginBottom:30,
  fontSize:25
},
textInputStyle:{
  borderWidth:1,
  width:'80%',
  height:50,
  borderRadius:10,
  marginVertical:10,
  textAlign:'center'
},
buttonText:{
    fontWeight:'bold',
    color:'white'
}


})