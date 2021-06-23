const type = {
    LOGIN: 'LOGIN',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGOUT: 'LOGOUT',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
}
const action = {
    login: (username,password) =>{
        return{
            type:type.LOGIN,
            payload:{
                username:username,
                password:password,
            }
        }
    },
    logout: () =>{
        return{
            type:type.LOGOUT,
        }
    },
}
export default {type, action}