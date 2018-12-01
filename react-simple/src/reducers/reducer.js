const initialState = {
    newValue: 'Created with redux'
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_VALUE':
            return {
                ...state,
                newValue: action.newValue
            };
        default:
            return state;
    }
};