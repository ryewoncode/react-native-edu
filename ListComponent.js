import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ListComponent = () => {
    return (
        <View style={styles.all}>
            <Text>List Component</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    all: {
        flex: 1,
        backgroundColor: 'violet',
    }
})

export default ListComponent;