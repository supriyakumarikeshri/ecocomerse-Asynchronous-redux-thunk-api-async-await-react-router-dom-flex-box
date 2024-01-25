import { ActionTypes } from "../constants/action-types";

export const fetchProducts = () => {
    //console.log(products, "products in actionn")
    return async function (dispatch, getState) {
        try {
            const response = await fetch("https://fakestoreapi.com/products")
            const data = await response.json()

            dispatch({
                type: ActionTypes.FETCH_PRODUCTS, payload: data
            })
        }
        catch (error) {
            console.error(error);
        }

    }
}
export const fetchProduct = (id) => {
    //console.log(products, "products in actionn")
    return async function (dispatch, getState) {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await response.json()

            dispatch({
                type: ActionTypes.SELECTED_PRODUCT, payload: data
            })
        }
        catch (error) {
            console.error(error);
        }

    }



    // return {
    //     type: ActionTypes.SET_PRODUCTS,
    //     payload: products
    // }
}


export const setProducts = (products) => {
    //console.log(products, "products in actionn")
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}
export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
};