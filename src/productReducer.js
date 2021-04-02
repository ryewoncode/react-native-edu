const initialState = {
    products: [{
        name: 'Zfilip',
        maker: 'Samsung'
    },
    {
        name: 'iPhone12',
        maker: 'Apple'
    }]
};

const productReducer = (state=initialState) => {
    return state;
}

export default productReducer;