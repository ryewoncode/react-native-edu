import React, { useState, useContext } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-ico-material-design';

import DataContext from './DataContext';

const HomeComponent = (props) => {
    const [searchText, setSearchText] = useState('');
    const context = useContext(DataContext);

    const onList = () => {
        // alert('onList');
        console.log(`searchText=${searchText}`)

        // props.navigation.navigate('List');
        // props.navigation.navigate('List', {'searchText': searchText});

        context.searchText = searchText; // context에 담아서 전달하기 때문에 props.navigation.navigate('List', {'searchText': searchText}); 이렇게 전달하지 않아도 됨
        props.navigation.navigate('List');
    }
    return (
        <View style={styles.all}>
            <Text>Home Component</Text>
            <TextInput onChangeText={setSearchText} />
            <Icon name='upload-to-cloud-button' width='100' height='100' badge='20' />
            <Button title='Go List' onPress={onList} />
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

export default HomeComponent;