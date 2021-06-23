import BaseRequest from "./BaseRequest";

export default class StudentRequest extends BaseRequest{
    getListStudents(params){
        let url = 'students'
        return this.get(url)
    }

    getStudent(params){
        let url = 'students'
        return this.get(url,params)
    }

    findStudents(params){
        let url = 'students/find'
        return this.get(url,params)
    }

    updateStudent(params){
        let url = 'students'
        return this.put(url,params)
    }

    addNewStudent(params){
        let url = 'students'
        return this.post(url,params)
    }

    deleteStudent(params){
        let url = 'students'
        return this.del(url,params)
    }
}