import React from 'react';
import { View, Text } from "react-native";
import { useSelector } from 'react-redux';

const Products = () => {
    const products = useSelector(state => state.productReducer.products);
    return (
        <View>
            <Text>Products</Text>
            <Text>{products.length}</Text>
            {products && products.map(product => (
                <View>
                    <Text>{product.name}</Text>
                </View>
            ))}
        </View>
    )
}

export default Products;