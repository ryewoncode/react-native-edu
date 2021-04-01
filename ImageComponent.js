import React, { Component, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const ImageComponent=()=>{
  return (
    <View style={styles.container}>
      <Text>Image Test</Text>
      <Image style={styles.tinyLogo} source={require('./images/cat.jpeg')} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 50,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
})

export default ImageComponent;
