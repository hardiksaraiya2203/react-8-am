const initialState = {
    isLoading: false,
    data: [],
    error: null,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case 'MyUserReq':
            return { ...state, isLoading: true }
        case 'MyUserSuc':
            return { ...state, isLoading: false, data: payload }
        case 'MyUserFail':
            return { ...state, isLoading: false, error: payload }

        default:
            return state
    }
}
