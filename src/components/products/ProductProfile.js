import React from 'react';
import styles from './products.module.css';

const ProductProfile = (props) => {
    let {productName, productAdjective, productMaterial, color, price, text, image} = props.product;
    return (
        <div className={styles.products}>
            <div className="pure-g">
                <div className="pure-u-1 pure-u-md-3-5">
                    The {productName} has a wonderful {color} color, with inspired {productAdjective} {productMaterial} properties.
                    It costs {price}.
                    <p>{text}</p>
                </div>
                <div className="pure-u-1 pure-u-md-1-5">
                    <img src={image} className={`pure-image ${styles.profile_image}`}/>
                </div>
            </div>
        </div>
    )
}

export default ProductProfile