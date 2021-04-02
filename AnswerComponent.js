import React, { useState, useContext } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-ico-material-design';

import DataContext from './DataContext';

const AnswerComponent = (props) => {
    const answer = props.route.params.answer;
    const count = props.route.params.count;
    return (
        <View style={styles.all}>
            <Text>정답입니다!!</Text>
            <Text>답은 {answer}입니다. '{count}'번만에 맞추셨습니다.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    all: {
        flex: 1,
        backgroundColor: 'violet',
    }
})

export default AnswerComponent;