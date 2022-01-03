import React from 'react';
import { Link } from 'react-router';
import styles from './products.module.css';

export default class ProductRow extends React.Component {
    constructor() {

        super();

    }

    render() {
        const {id, productName, productAdjective, productMaterial, color, price, image} = this.props.product;
        return (
            <div className={`pure-u-1 pure-u-md-1-3 ${styles.product}`}>
                <h3><Link to={`/products/${id}`}>{productName}</Link></h3>
                <ul>
                    <li>{productAdjective}</li>
                    <li>{productMaterial}</li>
                    <li>{price}</li>
                    <li>Color: {color}</li>
                    <img className={`pure-img ${styles.thumb}`}src={image}/>
                </ul>
            </div>
        )
    }
}