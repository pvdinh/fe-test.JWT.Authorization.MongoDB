import BaseRequest from "./BaseRequest";

export default class MajorClassRequest extends BaseRequest {
    getListMajorClass(params) {
        let url = 'class'
        return this.get(url, params)
    }

    addStudentToClass(data) {
        let url = 'class/addStudent'
        return this.put(url, data.majorClass, {idStudent: data.id})
    }

    getAllStudentsByIdClass(id) {
        let url = 'class/getStudents/'+id
        return this.get(url)
    }

    getMajorClassById(id) {
        let url = 'class/'+id
        return this.get(url)
    }

    deleteStudentFromMajorClass(data) {
        let url = 'class/deleteStudent'
        return this.put(url,data.majorClass,{idStudent:data.id})
    }
}