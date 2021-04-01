import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';


const TextInputComponent = () => {
  const [email, setEmail] = useState('');
  const onChage = (text) => {
    console.log(`onChage, text=${text}`);
    setEmail(text);
    console.log(`email=${email}`);
  }

  return (
    <View style={styles.all}>
      <View style={styles.container1}>
          <Text style={styles.box}>Box1</Text>
          <TextInput placeholder="email"
                    // onChangeText={onChage}
                    onChangeText={setEmail}
          />
          <Button title="btn" />
          <Text>{email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  all:{
    backgroundColor: '#cccccc',
    flex: 1,
  },
  container1: {
    backgroundColor: 'violet',
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,  },
})

export default TextInputComponent;
