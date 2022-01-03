const error = (state = null, action) => {
    const { type, error } = action;

    if (!type.includes('ERROR')) {
        return null;
    } 
    if (error) {
        return error;
    } 
    return state;
}

export default error;