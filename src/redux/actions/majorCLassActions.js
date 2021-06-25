const type={
    GET_LIST_MAJOR_CLASS:"GET_LIST_MAJOR_CLASS",
    GET_LIST_MAJOR_CLASS_SUCCESS:"GET_LIST_MAJOR_CLASS_SUCCESS",
    ADD_STUDENT_TO_CLASS:"ADD_STUDENT_TO_CLASS",
    GET_ALL_STUDENTS_BY_ID_CLASS:"GET_ALL_STUDENTS_BY_ID_CLASS",
    GET_MAJOR_CLASS_BY_ID:"GET_MAJOR_CLASS_BY_ID",
    GET_ALL_STUDENTS_BY_ID_CLASS_SUCCESS:"GET_ALL_STUDENTS_BY_ID_CLASS_SUCCESS",
    DELETE_STUDENT_FROM_MAJOR_CLASS:"DELETE_STUDENT_FROM_MAJOR_CLASS",
}
const action={
    getListMajorClass: (callback) =>{
        return{
            type:type.GET_LIST_MAJOR_CLASS,
            callback,
        }
    },
    getAllStudentsByIdClass: (id) =>{
        return{
            type:type.GET_ALL_STUDENTS_BY_ID_CLASS,
            payload:{
                id:id,
            }
        }
    },
    getMajorClassById: (id,callback) =>{
        return{
            type:type.GET_MAJOR_CLASS_BY_ID,
            payload:{
                id:id,
            },
            callback,
        }
    },
    addStudentToClass: (id,majorClass) =>{
        return{
            type:type.ADD_STUDENT_TO_CLASS,
            payload:{
                id:id,
                majorClass:majorClass,
            }
        }
    },
    deleteStudentFromMajorClass: (id,majorClass) =>{
        return{
            type:type.DELETE_STUDENT_FROM_MAJOR_CLASS,
            payload:{
                id:id,
                majorClass:majorClass,
            }
        }
    },
}
export default {type,action}