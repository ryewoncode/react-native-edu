import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const HomeComponent = (props) => {
    const onList = () => {
        // alert('onList');
        props.navigation.navigate('List');
    }
    return (
        <View style={styles.all}>
            <Text>Home Component</Text>
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