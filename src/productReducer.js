import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

import { ADD_PRODUCT, DELETE_PRODUCT } from './action';

const initialState = {
    products: [
        {name: 'Zfilip', maker: 'Samsung', id: uuidv4(),},
        {name: 'iPhone12',maker: 'Apple',id: uuidv4(),},
    ]
};

const productReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT:
            return {
                products: [...state.products, action.product]
            }
        case DELETE_PRODUCT:
            const index = state.products.findIndex(product => product.id == action.product.id);
            console.log(`index=${index}`);
            state.products.splice(index, 1);
            console.log(`state.products.length=${state.products.length}`);
            return {
                products: [...state.products]
            }
        default:
            return state;
    }
}

export default productReducer;