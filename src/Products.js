import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useDispatch, useSelector } from 'react-redux';

import { addProduct } from './action';

const Products = () => {
    const products = useSelector(state => state.productReducer.products);
    const [name, setName] = useState('');
    const [maker, setMaker] = useState('');
    const dispatch = useDispatch();

    const addBtn = () => {
        dispatch(addProduct({name, maker}));
    }

    return (
        <View>
            <Text>Products</Text>
            <Text>{products.length}</Text>
            {products && products.map((product, index) => (
                <View key={index}>
                    <Text>{product.name}, {product.maker}</Text>
                </View>
            ))}
            <View style={styles.addform}>
                <TextInput style={styles.input} onChangeText={setName} placeholder="name" />
                <TextInput style={styles.input} onChangeText={setMaker} placeholder="maker" />
                <Button title="Add" onPress={addBtn} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    addform: {
        flexDirection: 'row',
    },
    input: {
        height: 40,
        borderWidth: 1,
    }
})

export default Products;