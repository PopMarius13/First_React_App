import React from 'react';
import { connect } from 'react-redux';

import FilterableNameList from './FilterableNameList'

import * as actions from '../../actions/names';
import Spinner from '../spinner/Spinner';
import ErrorComponent from '../error_component/ErrorComponent';

class NameListContainer extends React.Component {
    componentDidMount(){
        this.props.fetchNameListIfNeeded()
    }

    render() {
        let {isFetching, error} = this.props;
        if (error) {
            return (
                <ErrorComponent errorMessage={error} handleError={this.props.fetchNameListIfNeeded()} />
            )
        } 
        if (isFetching) {
            return <Spinner />;
        }
        return <FilterableNameList {...this.props} />;
    }
}

const mapStateToProps = (store) => {
    const { names, isFetching, filterText, isAdding } = store.name;
    const { error } = store;
    return {
        names: names ? names.filter((name) => {
                            const fullName = `${name.first_name} ${name.last_name}`
                            return fullName.toLowerCase().includes(filterText.toLowerCase())
                        }) : null,                
        filterText: filterText,
        isFetching: isFetching,
        isAdding: isAdding,
        error: error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNameListIfNeeded: () => {
            dispatch(actions.fetchNameListIfNeeded());
        },
        filterNames: (text) => {
            dispatch(actions.filterNames(text));
        },
        deleteName: (id) => {
            dispatch(actions.deleteName(id));
        },
        canAddName: (payload) => {
            dispatch(actions.canAddName(payload));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NameListContainer);

