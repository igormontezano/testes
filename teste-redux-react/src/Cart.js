import React from 'react';
import { connect } from 'react-redux';
import {createSelector} from 'reselect';

const Cart = ( { cart, total, addProduct, setShipping }) => (
    <div>
        <h1>Carrinho</h1>
        <p>Items: <strong>{cart.items.length}</strong></p>
        <p>Frete: <strong>{cart.shipping_value}</strong></p>
        <p>Total: <strong>{total}</strong></p>
        <button onClick={addProduct}>Adicionar Produto</button>
        <button onClick={setShipping}>Calcular Frete</button>
    </div>
);

const calculateTotal = createSelector(
    state => state.items,
    state => state.shipping_value,
    (items, shipping_value) => {
        return items.reduce((subtotal, item) => subtotal + item.price, 0) + shipping_value;
    }
);

const mapStateToProps = state => ({
    cart: state,
    total: calculateTotal(state)
});

const mapDispatchToProps = dispatch => ({

    addProduct: () => dispatch({ type: 'ADD'}),
    setShipping: () => dispatch({ type: 'SET_SHIPPING'})

});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
