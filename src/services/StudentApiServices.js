import StudentRequest from "../requests/StudentRequest";

export const getAllStudents = () => {
    let studentRequest = new StudentRequest()
    return studentRequest.getListStudents()
}

export const updateStudent = (student) => {
    let studentRequest = new StudentRequest()
    return studentRequest.updateStudent(student)
}

export const addNewStudent = (student) => {
    let studentRequest = new StudentRequest()
    return studentRequest.addNewStudent(student)
}

export const deleteStudent = (id) => {
    let studentRequest = new StudentRequest()
    return studentRequest.deleteStudent(id)
}

export const searchStudent = (s) => {
    let studentRequest = new StudentRequest()
    return studentRequest.findStudents(s)
}