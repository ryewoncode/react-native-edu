import React, { useState, useContext } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-ico-material-design';

import DataContext from './DataContext';

const randomNumber = Math.floor(Math.random() * 100);
const QuestionComponent = (props) => {
    const [inputNum, setInputNum] = useState('');
    const [infoText, setInfoText] = useState('');
    const [count, setCount] = useState(0);

    const onCheck = () => {
        setCount(count + 1);
        if(inputNum > randomNumber) {
            setInfoText('입력하신 숫자보다 작은 수 입니다');
            setInputNum('');
        }else if(inputNum < randomNumber) {
            setInfoText('입력하신 숫자보다 큰 수 입니다.');
            setInputNum('');
        }else{
            props.navigation.navigate('Answer', {'answer': randomNumber, 'count': count});
        }
    }
    return (
        <View style={styles.all}>
            <Text>0 ~ 100 사이의 숫자를 입력하세요.</Text>
            <Text>{infoText}</Text>
            <TextInput onChangeText={setInputNum} />
            <Button title='Go Check' onPress={onCheck} />
        </View>
    );
};

const styles = StyleSheet.create({
    all: {
        flex: 1,
        backgroundColor: 'cyan',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default QuestionComponent;