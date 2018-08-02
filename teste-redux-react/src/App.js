import React from 'react';
import {Provider} from 'react-redux';

import {PersistGate} from 'redux-persist/integration/react';

import { store, persistor } from './store';

import Cart from './Cart';
import ProductList from './ProductList';


const App = () => (
  <Provider store={store} >
    <PersistGate loading={null} persistor={persistor} >
      <Cart />
      <ProductList />
    </PersistGate>
  </Provider>
);


export default App;
