import { SET_PRODUCTS } from 'src/store/types/Actions'
import { ProductState } from '@utils/types'

const INITIAL_STATE = {
    products: []
}

const ProductReducer = (state: ProductState = { ...INITIAL_STATE }, action: any) => {
    switch (action.type) {
        case SET_PRODUCTS: return {
            ...state,
            products: action.data
        }
        default: return state
    }
}

export default ProductReducer