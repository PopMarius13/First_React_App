import React from 'react';
import NavList from './NavList';

import styles from './header.module.css';

export default class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={`${styles.nav} pure-menu pure-menu-horizontal`}>
                <NavList className="pure-menu-heading pure-menu-link" to="/">Home</NavList>
                <ul className="pure-menu-list">
                    <li className="pure-menu-item"><NavList className="pure-menu-link" to="/products">Products</NavList></li>
                    <li className="pure-menu-item"><NavList className="pure-menu-link" to="/names">NameList</NavList></li>
                </ul>
            </div>
        )
    }
}
