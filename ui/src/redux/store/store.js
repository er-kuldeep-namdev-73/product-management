import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/productReducer';

console.log("commin")

const store = configureStore({
    reducer: {
        products: productReducer,
    },
});

export default store;