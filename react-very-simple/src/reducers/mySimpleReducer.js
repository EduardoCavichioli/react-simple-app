const initialState = {
    value: 'aaa'
}

const mySimpleReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_VALUE':
            return {
                ...state,
                value: action.value
            }

        default:
            return state;
    }
}

export default mySimpleReducer;