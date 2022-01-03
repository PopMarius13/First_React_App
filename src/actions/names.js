import { fetchNames, addAnotherName } from '../fake-backend'
// Action Types

export const REQUEST_NAMES = 'REQUEST_NAMES';
export const RECEIVE_NAMES = 'RECEIVE_NAMES';
export const RECEIVE_NAMES_ERROR = 'RECEIVE_NAMES_ERROR';

export const REQUEST_PROFILE = 'REQUEST_PROFILE';
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';
export const RECEIVE_PROFILE_ERROR = 'RECEIVE_PROFILE_ERROR';

export const ADD_NAME_REQUEST = 'ADD_NAME_REQUEST';
export const ADD_NAME_SUCCESS = 'ADD_NAME_SUCCESS';

export const FILTER_NAMES = 'FILTER_NAMES';
export const DELETE_NAME = 'DELETE_NAME';

// Action Creators 
const requestNames = () => {
    return {
        type: REQUEST_NAMES
    }
}

const receiveNames = (names) => {
    return {
        type: RECEIVE_NAMES,
        names: names
    }
}

const receiveNamesError = (err) => {
    return { 
        type: RECEIVE_NAMES_ERROR,
        error: err
    }
}

const fetchNameList = () => {
    return (dispatch) => {
        dispatch(requestNames())
        return fetchNames({method: 'GET'}).then(
            names => {
                dispatch(receiveNames(names))
            },
            error => {
                dispatch(receiveNamesError(error.message))
            }
        )
    }
} 

const shouldFetchNameList = (state) => {
    const {names} = state.name;
    if (!names.length) {
        return true;
    }
    return false;
}

export const fetchNameListIfNeeded = () => {
    return (dispatch, getState) => { 
        if (shouldFetchNameList(getState())) {
            return dispatch(fetchNameList())
        } else {
            return Promise.resolve()
        }
    }
}

const requestProfile = () => {
    return {
        type: REQUEST_PROFILE
    }
}

const receiveProfile = (profile) => {
    return {
        type: RECEIVE_PROFILE,
        profile: profile
    }
}

const receiveProfileError = (error) => {
    return {
        type: RECEIVE_PROFILE_ERROR,
        error: error
    }
}

export const fetchProfile = (id) => {
    return (dispatch) => {
        dispatch(requestProfile())
        return fetchNames({method: 'FIND', id: id}).then(
            profile => {
                dispatch(receiveProfile(profile))
            },
            error => {
                dispatch(receiveProfileError(error.message))
            }
        )
    }
}

const shouldFetchProfile = (state, currentID) => {
    const { id } = state.profile.profile;
    if(id != currentID) {
        return true;
    } 
    return false;
}

export const fetchProfileIfNeeded = (id) => {
    return (dispatch, getState) => {
        if(shouldFetchProfile(getState(), id)) {
            return dispatch(fetchProfile(id));
        }
        return Promise.resolve();
    }
}

const addNameRequest = () => {
    return {
        type: ADD_NAME_REQUEST
    }
}

const addNameSuccess = (name) => {
    return {
        type: ADD_NAME_SUCCESS,
        name: name
    }
}

export const canAddName = (name) => {
    return (dispatch) => {
        dispatch(addNameRequest())
        return addAnotherName(name).then(response => dispatch(addNameSuccess(response)))
    }
}

export const filterNames = (text) => {
    return {
        type: FILTER_NAMES,
        text: text
    }
}

export const deleteName = (id) => { 
    return {
        type: DELETE_NAME,
        id: id
    }
}