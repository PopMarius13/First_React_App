import React from 'react';
import { connect } from 'react-redux';
import {fetchReviews, addNewReview } from '../../actions/reviews';
import Spinner from '../spinner/Spinner';
import Review from './Review';
import AddReview from './AddReview';
import ReviewList from './ReviewList';
 
class ReviewContainer extends React.Component {
    componentDidMount() {
        this.props.getReviews(this.props.productID)
    }

    render() {
        const { isFetching, reviews, productID } = this.props;
        if (isFetching) {
            return <Spinner />
        }

        let reviewList;
        if (reviews.items.length) {
            reviewList = reviews.items.map((review) =>
                            <Review key={review.id} review={review} />
                        )
        } else {
            reviewList = <div className="pure-u-1 pure-u-md-1-4"> 
                            <h2>No reviews available!</h2>
                        </div>
        }
        return (
            <div>
                <ReviewList >
                    {reviewList}
                </ReviewList>
                <AddReview productID={productID} addReview={this.props.addNewReview} />
            </div>
        )
    }
}

const mapStateToProps = (store, ownProps) => {
    const {reviewsByProductID} = store;
    const { productID } = ownProps;
    const reviews = reviewsByProductID[productID]
    const isFetching = () => {
        if (!reviews || reviews.isFetching) {
            return true;
        }
        return false;
    }
    return {
        reviews: reviews,
        isFetching: isFetching()
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getReviews: (id) => {
            dispatch(fetchReviews(id))
        },
        addNewReview: (productID, review) => {
            dispatch(addNewReview(productID, review))
        }
    }
}

ReviewContainer.propTypes = {
    getReviews: PropTypes.func.isRequired,
    productID: PropTypes.number.isRequired,
    reviews: PropTypes.object,
    isFetching: PropTypes.bool,
    addNewReview: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewContainer);

