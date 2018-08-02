import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import cart from './cart';

const persistConfig = {
    key: 'shopping-Cart',
    storage
}

const persistedReducer = persistReducer(persistConfig, cart);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store , persistor };