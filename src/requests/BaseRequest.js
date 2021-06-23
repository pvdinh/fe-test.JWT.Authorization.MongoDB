import {BASE_URL} from "../url";
import axios from "axios";
import {axioscfg} from "../axios/axioscfg";


export default class BaseRequest {
    version = 'api/v1';
    async get(url,params={}){
        try{
            const response = await axioscfg.get(`${BASE_URL}/${this.version}/${url}`,{params:params})
            return this._responseHandle(response)
        }catch (e) {
            this._errorHandle(e)
        }
    }

    async post(url,data ={}){
        try{
            const response = await axioscfg.post(`${BASE_URL}/${this.version}/${url}`,{...data})
            return this._responseHandle(response)
        }catch (e) {
            this._errorHandle(e)
        }
    }

    async postLogin(url,data ={}){
        try{
            const response = await axioscfg.post(`${BASE_URL}/${this.version}/${url}`,{...data})
            return{
                currentUser:response.data.message,
                sessionToken:response.data.authorization,
                statusCode:response.data.statusCode,
            }
        }catch (e) {
            this._errorHandle(e)
        }
    }

    async put(url,data ={}){
        try{
            const response = await axioscfg.put(`${BASE_URL}/${this.version}/${url}`,{...data})
            return this._responseHandle(response)
        }catch (e) {
            this._errorHandle(e)
        }
    }
    async del(url,data){
        try{
            const response = await axioscfg.delete(`${BASE_URL}/${this.version}/${url}/delete/${data}`,)
            this._responseHandle(response)
        }catch (e) {
            this._errorHandle(e)
        }
    }


    _responseHandle(response){
        const {data} = response
        if(response.data.statusCode !== 200){
            return{
                message:response.data.message,
                statusCode:response.data.statusCode,
            }
        }else {
            return{
                data:response.data.data,
                statusCode:response.data.statusCode,
            }
        }
    }
    _errorHandle(err){
        if (err.response && err.response.status === 401) { // Unauthorized (session timeout)
            window.location.href = '/';
        }
        throw err
    }
}