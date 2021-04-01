import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const PositionComponent = () => {
    const onBtn = () => {
        alert('onBtn');
    };
    return (
        <View style={styles.all}>
        <View style={styles.container1}>
            <Text style={styles.box}>Box1</Text>
            <Text style={styles.box}>Box2</Text>
            <Text style={styles.box}>Box3</Text>
            <Text style={styles.box}>Box4</Text>
            <Button title="btn"
                    // onPress={() => {alert('btn clicked!')}} 
                    onPress={onBtn}
            />
        </View>
        <View style={styles.container2}><Text>Box2</Text></View>
        {/* <View style={styles.container3}><Text>Box3</Text></View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        width: 30,
        height: 30,
        backgroundColor: 'red',
        margin: 5,
    },
  all:{
    backgroundColor: '#cccccc',
    flex: 1,
    // flexDirection: 'row',
  },
  container1: {
    backgroundColor: 'violet',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 10,
    // width: 150,
    // height: 150,
  },
  container2: {
    backgroundColor: 'cyan',
    flex: 1,
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
