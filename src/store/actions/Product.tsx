import {GET_PRODUCTS, SET_PRODUCTS} from 'src/store/types/Actions'

export const getProducts = () => {
    return {
        type: GET_PRODUCTS,
    }
}

export const setProducts = (data: any) => {
    return {
        type: SET_PRODUCTS,
        data
    }
}