import BaseRequest from "./BaseRequest";

export default class MajorClassRequest extends BaseRequest{
    getListMajorClass(params){
        let url = 'class'
        return this.get(url,params)
    }
}