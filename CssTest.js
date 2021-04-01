import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

let cnt = 0;
const CssTest = () => {
    const arr = ['violet', 'magenta', 'skyblue', 'cyan', 'green', 'yellow', 'orange', 'red'];
    const [color, setColor] = useState(arr[cnt]);

  return (
    <View style={[styles.container, {backgroundColor:`${color}`}]}>
        <Text onPress={() => {setColor(arr[cnt++ % arr.length])}}>Touch</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default CssTest;
