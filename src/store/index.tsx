import { configureStore, ThunkAction, Action, applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import mainReducer from './reducers';
import mainSaga from './sagas';

const saga = createSagaMiddleware()
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['ProductReducer'],
    debug: true,
}
const persistedReducer = persistReducer(persistConfig, mainReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [saga]
});

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

saga.run(mainSaga)