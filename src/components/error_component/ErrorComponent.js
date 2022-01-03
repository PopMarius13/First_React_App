import React from 'react';

const ErrorComponent = (props) => {
    const { errorMessage } = props;
    return (
        <div style={{'margin': 20}}>
            <h2>{errorMessage}</h2>
            <button className="pure-button" onClick={props.handleError}>Try again</button>
        </div>
    )
}

export default ErrorComponent;