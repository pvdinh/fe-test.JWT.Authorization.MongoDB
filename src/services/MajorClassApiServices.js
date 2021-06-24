import MajorClassRequest from "../requests/MajorClassRequest";

export const getListMajorClass = () => {
    let majorClassRequest = new MajorClassRequest()
    return majorClassRequest.getListMajorClass()
}
export const addStudentToClass = (data) => {
    let majorClassRequest = new MajorClassRequest()
    return majorClassRequest.addStudentToClass(data)
}