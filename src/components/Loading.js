import { StyleSheet, Text, View, ActivityIndicator, Pressable } from 'react-native'
import React from 'react'

const Loading = ({changeIsLoading}) => {
  return (
    <View style={styles.container}>
<Pressable 
  onPress={changeIsLoading}
  style={[{}, styles.closeButtonContainer]}>
  <Text style={styles.closeButton}>X</Text>
</Pressable>


        <ActivityIndicator size={'large'} color={'blue'}/>
      <Text style={styles.loginText}>Loading...</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'lightblue'
    },
    loginText:{
        fontWeight:'bold',
        fontSize:16,
        color:'white',
        marginTop:15
    },
    closeButtonContainer:{
        backgroundColor:"darkblue",
        width:50,
        height:50,
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        top:50,
        right:15
    },
    closeButton:{
        color:'white',
        fontWeight:'bold',
        fontSize:20
    }


})
