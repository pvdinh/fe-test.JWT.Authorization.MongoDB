const type={
    GET_LIST_MAJOR_CLASS:"GET_LIST_MAJOR_CLASS",
    GET_LIST_MAJOR_CLASS_SUCCESS:"GET_LIST_MAJOR_CLASS_SUCCESS",
    ADD_STUDENT_TO_CLASS:"ADD_STUDENT_TO_CLASS",
}
const action={
    getListMajorClass: (callback) =>{
        return{
            type:type.GET_LIST_MAJOR_CLASS,
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
}
export default {type,action}