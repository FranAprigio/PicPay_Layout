import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text } from 'react-native';

const Btn = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        Esqueceu sua senha?
      </Text>
      <Button style={styles.btn}
        title="login"
        color={"#209454"}
      />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: '',
    marginHorizontal: 6,
    
  },
  title: {
    textAlign: 'center',
    marginVertical: 1,
    paddingBottom: 30,
    paddingTop: 30,
    fontSize: 15,
  },

});

export default Btn;