import React from 'react';
import PropTypes from 'prop-types';

const Review = (props) => {
    const { reviewer, text } = props.review;

    return (
        <div className="pure-u-1 pure-u-md-1-4">
            <h2>{reviewer}</h2>
            <h3>{text}</h3>
        </div>
    )
}

Review.propTypes = {
    review: PropTypes.shape({
        reviewer: PropTypes.string,
        text: PropTypes.string
    }).isRequired
}

export default Review