import login from "../actions/loginActions";

const getSessionToken = () =>{
    return localStorage.getItem('sessionToken') ? localStorage.getItem('sessionToken') : null
}
const getCurrentUser = () =>{
    return localStorage.getItem('currentUser') ? localStorage.getItem('currentUser') : null
}

const initState={
    sessionToken:getSessionToken(),
    currentUser:getCurrentUser(),
    isLogin:false,
}
const loginReducer = (state = initState,action) =>{
    switch (action.type) {
        case login.type.LOGIN_SUCCESS:{
            return {...state,isLogin: action.isLogin}
        }
        case login.type.LOGOUT_SUCCESS:{
            return {...state,isLogin: action.isLogin}
        }
        default:
            return {...state}
    }
}
export default loginReducer