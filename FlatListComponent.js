import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native';

import users from './data/user-list.json'


const Item = ({name, _id}) =>  {
    return(
        <View>
            <Text>{name}, {_id}</Text>
        </View>
    )
}
const FlatListComponent = () => {

    return (
        <View style={styles.all}>
            <FlatList 
                data={users}
                renderItem={({item}) => <Item name={item.name} _id={item._id} />}
                keyExtractor={item => item.email} />
        </View>
    );
};

const styles = StyleSheet.create({
    all: {
        backgroundColor: '#cccccc',
        flex: 1,
    }
});

export default FlatListComponent;