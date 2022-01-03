import React from 'react';

import ProductRow from './ProductRow';

import styles from './products.module.css';

const ProductList = (props) => {
    
    let { products } = props;
    return (
        <div className={`pure-g ${styles.products}`}>
            {products.map((product) =>
                <ProductRow key={product.id} product={product}/>
            )}
        </div>
    )
}

export default ProductList;