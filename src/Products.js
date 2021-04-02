import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useDispatch, useSelector } from 'react-redux';

import { addProduct, deleteProduct } from './action';

const Products = () => {
    const products = useSelector(state => state.productReducer.products);
    const [name, setName] = useState('');
    const [maker, setMaker] = useState('');
    const dispatch = useDispatch();

    const addBtn = () => {
        dispatch(addProduct({name, maker}));
    }

    const deleteBtn = (product) => {
        dispatch(deleteProduct(product));
    }

    return (
        <View style={styles.all}>
            <Text>Products</Text>
            <Text>{products.length}</Text>
            {products && products.map((product, index) => (
                <View key={index} style={styles.product}>
                    <Text>{product.name}, {product.maker}</Text>
                    <Button title="Delete" onPress={deleteBtn(product)} />
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
    all: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addform: {
        flexDirection: 'row',
    },
    input: {
        height: 40,
        borderWidth: 1,
    },
    product: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default Products;