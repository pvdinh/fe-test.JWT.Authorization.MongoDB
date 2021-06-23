import BaseRequest from "./BaseRequest";

export default class LoginRequest extends BaseRequest{
    login(params){
        let url = 'login'
        return this.postLogin(url,params)
    }
}