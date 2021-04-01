import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const SytleComponent=()=>{
  return (
    <View style={styles.container}>
      <Text>Style Test</Text>
      <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('./images/cat.jpeg')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'violet',
        // flex: 1,
        backgroundColor: '#cccccc',
        flex: .5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileContainer: {
        backgroundColor: 'cyan',
        width: 300,
        height: 400,
        borderWidth: 5, 
        borderRadius: 150,
        borderColor: '#6D214F',
    },
    imageContainer: {
        backgroundColor: 'violet',
        width: 120,
        height: 120,
        borderWidth: 3, 
        borderRadius: 60,
        borderColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 80,
        height: 80,
    }
});

export default SytleComponent;
