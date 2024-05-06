export const UserReq = () => ({
  type: 'UserReq',
  
})
export const UserSuc = (payload) => ({
  type: 'UserSuc',
  payload
})
export const UserError = (payload) => ({
  type: 'UserError',
  payload
})
