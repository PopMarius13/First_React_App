import React from 'react';
import { Link } from 'react-router';

import ProductProfileContainer from '../products/ProductProfileContainer';
import PRODUCTS from '../../test_data/mock-products';

import styles from './main.module.css';

export default class Main extends React.Component {
    constructor() {
        super();
    }

    render() {
        let randomProduct = Math.floor(Math.random() * PRODUCTS.length);
        const {background, header, divider} = styles;
        return (
            <div>
                <div className={background}/>
                <div className={header}>
                    <h2>Lorem ipsum dolor sit ament</h2>
                    <ul>
                        <li>Fusce rutrum nuc vitae</li>
                        <li>Contrary to popular belief</li>
                        <li>But I must explain to you how all this mistaken idea of denouncing pleasure</li>
                    </ul>

                </div>
                <div className={divider}/>
                <Link to={`/products/${randomProduct}`}><ProductProfileContainer id={randomProduct}/></Link>

                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                </p>
                <div className={divider}/>
            </div>
        )
    }
}