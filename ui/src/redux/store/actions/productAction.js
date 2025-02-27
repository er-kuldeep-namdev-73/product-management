// src/store/actions/productActions.js
import axios from 'axios';

export const fetchProducts = () => async (dispatch) => {
    dispatch({ type: 'FETCH_PRODUCTS_REQUEST' });
    try {
        const response = await axios.get('http://localhost:8000/api/products');
        dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'FETCH_PRODUCTS_FAILURE', payload: error.message });
    }
};

export const addProduct = (product) => async (dispatch) => {
    const response = await axios.post('http://localhost:8000/api/products', product);
    dispatch({ type: 'ADD_PRODUCT', payload: response.data });
};

export const updateProduct = (product) => async (dispatch) => {
    const response = await axios.put(`http://localhost:8000/api/products/${product?._id}`, product);
    dispatch({ type: 'UPDATE_PRODUCT', payload: response.data });
};

export const deleteProduct = (id) => async (dispatch) => {
    await axios.delete(`http://localhost:8000/api/products/${id}`);
    dispatch({ type: 'DELETE_PRODUCT', payload: id });
};
