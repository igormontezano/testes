import React from 'react';
import { connect } from 'react-redux';

const ProductList = ( { products, removeProduct }) => (
    <div>
        <h2>Produtos</h2>
        <ul>
            {products.map((product, index) =>
                <li key={product.price} >{product.price}
                    <button onClick={() => removeProduct(index)} >Remover</button>
                </li>)}
        </ul>
    </div>
);

const mapStateToProps = state => ({
    products: state.items
});

const mapDispatchToProps = dispatch => ({

    removeProduct: (index) => dispatch({ type: 'DEL', index})

});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
