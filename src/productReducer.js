import { ADD_PRODUCT } from "./action";

const initialState = {
    products: [
        {
            name: 'Zfilip',
            maker: 'Samsung'
        },
        {
            name: 'iPhone12',
            maker: 'Apple'
        }
    ]
};

const productReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT:
            return {
                products: [...state.products, action.product]
            }
        default:
            return state;
    }
}

export default productReducer;