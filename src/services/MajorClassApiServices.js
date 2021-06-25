import MajorClassRequest from "../requests/MajorClassRequest";

export const getListMajorClass = () => {
    let majorClassRequest = new MajorClassRequest()
    return majorClassRequest.getListMajorClass()
}
export const addStudentToClass = (data) => {
    let majorClassRequest = new MajorClassRequest()
    return majorClassRequest.addStudentToClass(data)
}
export const getAllStudentsByIdClass = (id) => {
    let majorClassRequest = new MajorClassRequest()
    return majorClassRequest.getAllStudentsByIdClass(id)
}
export const getMajorClassById = (id) => {
    let majorClassRequest = new MajorClassRequest()
    return majorClassRequest.getMajorClassById(id)
}
export const deleteStudentFromMajorClass = (data) => {
    let majorClassRequest = new MajorClassRequest()
    return majorClassRequest.deleteStudentFromMajorClass(data)
}