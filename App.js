
import React from "react";
import { StyleSheet, Text, SafeAreaView, ImageBackground, View } from 'react-native';
import Logo from './Components/Logo';
import Login from './Components/Login';
import Btn from './Components/Btn';

export default function App (){
  return (

    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("./assets/backgroundimg.png")} resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.views}>
          <Logo />
          <Login />
          <Btn />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor:'',
    ImageBackground:"cover",
  },

  views:{
    width:400,
    alignItems:"center",
    justifyContent: "center",
    alignContent: 'center',
  },

  image: {
    flex: 1,
    
  },

});



