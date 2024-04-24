const initialState = {
    data: [],
    error: null,
    isLoading: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case 'UserRequest':
            return { ...state, isLoading: true }
        case 'UserSuc':
            return { ...state, data: payload, isLoading: false }
        case 'UserFail':
            return { ...state, error: payload, isLoading: false}

        default:
            return state
    }
}
