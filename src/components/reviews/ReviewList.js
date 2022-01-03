import React from 'react';
import styles from './reviews.module.css'
import PropTypes from 'prop-types';

const ReviewList = (props) => {
    return (
        <div className={`pure-g ${styles.reviews}`}>
            {props.children}
        </div>
    )
}

ReviewList.propTypes = {
    children: PropTypes.node.isRequired
}

export default ReviewList;