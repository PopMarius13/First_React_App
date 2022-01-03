import { REQUEST_NAMES, RECEIVE_NAMES, RECEIVE_NAMES_ERROR, REQUEST_PROFILE, RECEIVE_PROFILE, RECEIVE_PROFILE_ERROR,
    ADD_NAME_REQUEST, ADD_NAME_SUCCESS, FILTER_NAMES, DELETE_NAME } from '../actions/names'

const initialNameState = {
    names: [],
    isFetching: true,
    isAdding: false,
    filterText: ''
};

const initialProfileState = {
    profile: {},
    isFetching: false
}

export const profile = (state = initialProfileState, action) => {
    switch (action.type) {
        case REQUEST_PROFILE:
            return {...state, isFetching: true};
        case RECEIVE_PROFILE:
            return {...state,
                isFetching: false,
                profile: action.profile
            };
        default:
            return state;
    }
}

export const name = (state = initialNameState, action) => {
    switch(action.type) {
        case REQUEST_NAMES:
            return {...state, isFetching: true };
        case RECEIVE_NAMES:
            const nextState = {...state}
            action.names.map((name) => {
                nextState.names[name.id] = name
            });
            return {...nextState, isFetching: false}

        case ADD_NAME_REQUEST:
            return {...state, isAdding: true};
        case ADD_NAME_SUCCESS:
            const newEntry = action.name;
            const nextNameState = {...state, isAdding: false}
            nextNameState.names[newEntry.id] = newEntry;
            return nextNameState;

        case FILTER_NAMES:
            return {...state, filterText: action.text};
        case DELETE_NAME:
            const newNames = state.names.filter((name) =>  name.id !== action.id)
            return {...state, names: newNames};
        default:
            return state;
    }
}