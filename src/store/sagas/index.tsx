import {all, fork} from 'redux-saga/effects';

import ProductSaga from './Product';

// Accomodate all sagas in one place to be passed in the saga middleware
function* mainSaga() {
    yield all([
        fork(ProductSaga),
        // Any other sagas in the project will come here
    ])
}

export default mainSaga;