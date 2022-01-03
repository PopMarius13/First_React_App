import React from 'react';
import { Link } from 'react-router';

import style from './namelist.module.css';

export default class NameRow extends React.Component {
    constructor() {
        super();
    }

    render() {
        let {first_name, last_name, id} = this.props.name;
        return (
            <div className={`pure-u-1 pure-u-md-1-4 ${style.aquamarine_background}`}>
                <h3 className={style.name}><Link to={`/names/${id}`}>{first_name} {last_name}</Link></h3>
                <button onClick={() => this.props.deleteName(id)}>Delete {id}</button>
            </div>
        )
    }
}