import React from 'react';

import styles from './header.module.css';

import {Link , IndexLink} from 'react-router';

export default class NavList extends React.Component {
    constructor() {
        super();
    }

    render() {
        let { to } = this.props;
        if(to === '/') {
            return <IndexLink {...this.props} activeClassName={styles.active}/>;
        } else {
            return <Link {...this.props} activeClassName={styles.active}/>;
        }
    }
}