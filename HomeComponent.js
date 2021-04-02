import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const HomeComponent = (props) => {
    const [searchText, setSearchText] = useState('');

    const onList = () => {
        // alert('onList');
        console.log(`searchText=${searchText}`)
        // props.navigation.navigate('List');
        props.navigation.navigate('List', {'searchText': searchText});
    }
    return (
        <View style={styles.all}>
            <Text>Home Component</Text>
            <TextInput onChangeText={setSearchText} />
            <Button title='Go List' onPress={onList} />
        </View>
    );
};

const styles = StyleSheet.create({
    all: {
        flex: 1,
        backgroundColor: 'cyan',
        justifyContent: 'center',
    }
})

export default HomeComponent;