import LoginRequest from "../requests/LoginRequest";

export const authLogin = (params) =>{
    let loginRequest = new LoginRequest();
    return loginRequest.login(params)
}