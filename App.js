import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  Pressable
} from 'react-native';

import React,{useState} from 'react';

export default function App() {

 const [mail, setMail] = useState("")
 const [password, setPassword] = useState()
 const [seePasword, setSeePassword] = useState(true)
 
 console.log(mail)
 console.log(password)

  return (
    <View style={styles.container}>

      

      <Text>E-mail</Text>
      <TextInput
      placeholder='Enter your e-mail address'
      style={styles.textInputStyle}
      onChangeText={(value)=>setMail(value)}
      />

      <Text>Password</Text>
      <TextInput
      placeholder='Enter your password'
      style={styles.textInputStyle}
      onChangeText={(value2)=>setPassword(value2)}
      secureTextEntry = {seePasword}
      />

      <Pressable 
        onPress={()=>console.log("clicked")}
        style ={ ({pressed}) => [{
          backgroundColor:pressed? "gray": 'lightblue'
        },styles.button]}>

        <Text style={styles.buttonText}>Save</Text>

      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputStyle:{
    borderWidth:1,
    width:'80%',
    height:50,
    borderRadius:50,
    marginVertical:20,
    textAlign:'center'
  },
  button:{
    borderWidth:0,
    width:"30%",
    height:50,
    borderRadius:50,
    alignItems: 'center',
    justifyContent:'center',
  },
  buttonText:{
    fontWeight:'bold',
    color:'white'
  }
});
