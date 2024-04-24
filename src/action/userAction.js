export const UserRequest = () => ({
    type: 'UserRequest',
})
export const UserSuc = (payload) => ({
    type: 'UserSuc',
    payload
})
export const UserFail = (payload) => ({
    type: 'UserFail',
    payload
})
