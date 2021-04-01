import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const PositionComponent =()=>{
  return (
    <View style={styles.all}>
      <View style={styles.container1}>
          <Text style={styles.box}>Box1</Text>
          <Text style={styles.box}>Box2</Text>
          <Text style={styles.box}>Box3</Text>
          <Text style={styles.box}>Box4</Text>
      </View>
      <View style={styles.container2}><Text>Box2</Text></View>
      {/* <View style={styles.container3}><Text>Box3</Text></View> */}
    </View>
  )
}

const styles = StyleSheet.create({
    box: {
        width: 50,
        height: 50,
        backgroundColor: 'red',
        margin: 20,
    },
  all:{
    backgroundColor: '#cccccc',
    flex: 1,
    // flexDirection: 'row',
  },
  container1: {
    backgroundColor: 'violet',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
    // width: 150,
    // height: 150,
  },
  container2: {
    backgroundColor: 'cyan',
    flex: 2,
    // width: 150,
    // height: 150,
  },
//   container3: {
//     backgroundColor: 'green',
//     width: 150,
//     height: 150,
//   },
})

export default PositionComponent;
