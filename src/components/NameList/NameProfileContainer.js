import React from 'react';
import { connect } from 'react-redux';

import NameProfile from './NameProfile';
import { fetchProfileIfNeeded } from '../../actions/names';

import Spinner from '../spinner/Spinner';
import ErrorComponent from '../error_component/ErrorComponent';

class NameProfileContainer extends React.Component {

    componentDidMount() {
        this.props.fetchProfile();
    }

    render() {
        const { isFetching, error } = this.props;
        if (error) {
            return (
                <ErrorComponent errorMessage={error} handleError={this.props.fetchProfile} />
            )
        }
        if(isFetching) {
            return <Spinner />
        } 
        return <NameProfile {...this.props} />;
    }
}

const mapStateToProps = (store) => {
    const { profile, isFetching} = store.profile;
    const { error } = store;
    return {
        profile: profile,
        isFetching: isFetching,
        error: error
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const id = +ownProps.params.id
    return {
        fetchProfile: () => {
            dispatch(fetchProfileIfNeeded(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NameProfileContainer);