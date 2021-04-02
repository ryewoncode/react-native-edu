import React from 'react';
import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DataContext from './DataContext';

const ListComponent = (props) => { // {route}를 전달받아 route.params.searchText로 사용할 수 있음
    const searchText = props.route.params.searchText;
    const context = useContext(DataContext);

    console.log(`List searchText=${searchText}`);
    console.log(`List context.searchText=${context.searchText}`);

    return (
        <View style={styles.all}>
            <Text>List Component</Text>
            <Text>searchText from Home: {searchText}</Text>
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