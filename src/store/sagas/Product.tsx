import {all, takeEvery, put} from 'redux-saga/effects';

import {GET_PRODUCTS} from 'src/store/types/Actions';
import {setProducts} from 'src/store/actions/Product';
import { getRequest } from 'src/apis/Axios';

// This function is used to fetch the products list
function* fetchProducts() {
    try {
        const response: any = yield getRequest({})
        if (response) {
            yield put(setProducts(response.data))
        }
    } catch (error) {
        console.log(error)
    }
}

// This is used to connect saga with the actions
function* ProductSaga() {
    yield all([
        takeEvery(GET_PRODUCTS, fetchProducts)
    ])
}

export default ProductSaga