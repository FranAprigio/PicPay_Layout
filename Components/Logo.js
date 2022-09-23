import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 150,
  },
  tinyLogo: {
    width: 200,
    height: 100,
    resizeMode: 'stretch',
  },
});

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/picpay-logo.png')}
      />
    </View>
  );
}

export default Logo;