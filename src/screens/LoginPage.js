import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  Pressable,
  Image,
  Alert
} from 'react-native';

import React,{useState} from 'react';
import Loading from '../components/Loading';

const LoginPage = ({navigation}) => {

 const [mail, setMail] = useState("")
 const [password, setPassword] = useState()
 const [isLoading, setIsLoading] = useState(false)

 const handleLogin = () => {
  // E-posta kontrolü: Boşluk olmamalı
  if (mail.includes(' ')) {
    Alert.alert('Geçersiz E-posta', 'E-posta adresinde boşluk olmamalıdır.');
    return;
  }

  // Şifre kontrolü: Boş olmamalı
  if (password === '') {
    Alert.alert('Geçersiz Şifre', 'Şifre alanı boş bırakılamaz.');
    return;
  }

  // Eğer kontroller geçilirse, loading ekranı gösterilir
  setIsLoading(true);
};


 
 console.log(mail)
 console.log(password)
 console.log(isLoading)

  return (
    <View style={styles.container}>

      <Image 
      source={require('../../assets/images/login_icon.png')}
      style={styles.Image}/>

      <Text style={styles.Welcome}>Welcome </Text>

      <Text>E-mail</Text>
      <TextInput
      placeholder='Enter your e-mail address'
      inputMode='email'
      style={styles.textInputStyle}
      onChangeText={(value)=>setMail(value)}
      />

      <Text>Password</Text>
      <TextInput
      placeholder='Enter your password'
      style={styles.textInputStyle}
      onChangeText={(value2)=>setPassword(value2)}
      secureTextEntry = {true}
      />

     <Pressable 
      onPress={handleLogin}
      style={({ pressed }) => [{
      backgroundColor: pressed ? "gray" : '#1e90ff'
     }, styles.button]}>
  
  <Text style={styles.buttonText}>Login</Text>
</Pressable>


      <Pressable 
        onPress={()=> navigation.navigate('SignUp')}
        style ={ ({pressed}) => [{
          backgroundColor:pressed? "gray": 'lightblue',
          marginTop:50
        },styles.signUpbutton]}>

        <Text style={styles.buttonText}>Sign Up</Text>

      </Pressable>

      {isLoading ? <Loading changeIsLoading={()=> setIsLoading(false)}/> : null}


      <StatusBar style="auto" />
    </View>
  );

}


export default LoginPage;

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
    borderRadius:10,
    marginVertical:20,
    textAlign:'center'
  },
  button:{
    borderWidth:0,
    width:"80%",
    height:50,
    borderRadius:15,
    alignItems: 'center',
    justifyContent:'center',
  },
  buttonText:{
    fontWeight:'bold',
    color:'white'
  },
  Image:{
    width:100,
    height:100,
    marginVertical:20
  },
  Welcome:{
    fontWeight:'bold',
    marginVertical:5,
    fontSize:25
  },
  signUpbutton:{
    borderWidth:0,
    width:"30%",
    height:50,
    borderRadius:15,
    alignItems: 'center',
    justifyContent:'center',
  }

});
