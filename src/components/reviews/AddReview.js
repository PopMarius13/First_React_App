import React from 'react';
import styles from './reviews.module.css'
import PropTypes from 'prop-types';

export default class AddReview extends React.Component {
    
    constructor() {
        super();
        this.state = {
            name: '' ,
            review: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        switch (event.target.id) {
            case "name":
                this.setState({ name: event.target.value})
                break;
            case "review":
                this.setState({ review: event.target.value})
                break;
        }
    }
    
    handleSubmit(event) {
        const { productID } = this.props;
        const { name, review } = this.state;
        const formattedReview = {
            reviewer: name,
            text: review
        }
        this.props.addReview(productID, formattedReview)
        this.setState({
                name: '',
                review: ''
            })
        event.preventDefault();
    }

    render() {
        return (
            <div className={`pure-group ${styles.reviews}`}> 
                <div className="pure-u-1 pure-u-md-1-4">
                    <h2>Add new review</h2>
                    <form className="pure-form" onSubmit={this.handleSubmit} >
                        <fieldset className="pure-group">
                            <input id="name" className="pure-input-3-4" type="text" placeholder="Your name" value={this.state.name} onChange={this.handleChange} />
                            <textarea id="review" className="pure-input-3-4" placeholder="Your review here" value={this.state.review} onChange={this.handleChange} />
                            <button className="pure-button pure-input-3-4 pure-button-primary" type="submit" >Submit</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        )
    }
}

AddReview.propTypes = {
    addReview: PropTypes.func.isRequired,
    productID: PropTypes.number.isRequired,
}