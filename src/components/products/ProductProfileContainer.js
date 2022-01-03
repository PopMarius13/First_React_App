import { connect } from 'react-redux';
import React from 'react';

import ProductProfile from './ProductProfile';
import { fetchProductProfileIfNeeded } from '../../actions/products';
import ReviewContainer from '../reviews/ReviewContainer'
import Spinner from '../spinner/Spinner';
import ErrorComponent from '../error_component/ErrorComponent';


class ProductProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getProduct()
    }

    render() {
        const { isFetching, error } = this.props;
        const { id } = this.props.product;
        if (error) {
            return <ErrorComponent errorMessage={error} handleError={this.props.getProduct} />;
        }
        if (isFetching) {
            return <Spinner />;
        }

        return (
            <div>
                <ProductProfile product={this.props.product} />
                <ReviewContainer productID={id} />
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    const { product, isFetching } = store.product.productProfile; 
    return {
        product: product,
        isFetching: isFetching
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const id = ownProps.id || +ownProps.params.id;
    return {
        getProduct: () => {
            dispatch(fetchProductProfileIfNeeded(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductProfileContainer)