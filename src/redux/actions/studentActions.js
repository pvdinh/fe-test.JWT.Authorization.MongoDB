const type ={
    GET_ALL_STUDENTS:"GET_ALL_STUDENTS",
    UPDATE_STUDENT:"UPDATE_STUDENT",
    DELETE_STUDENT:"DELETE_STUDENT",
    SEARCH_STUDENT:"SEARCH_STUDENT",
    ADD_NEW_STUDENT:"ADD_NEW_STUDENT",
    GET_ALL_STUDENTS_SUCCESS:"GET_ALL_STUDENTS_SUCCESS",
    GET_STUDENTS_SEARCH_SUCCESS:"GET_STUDENTS_SEARCH_SUCCESS",
}
const action = {
    getAllStudents : () =>{
        return{
            type:type.GET_ALL_STUDENTS,
        }
    },
    updateStudent : (student) =>{
        return{
            type:type.UPDATE_STUDENT,
            payload:{
                student:student,
            }
        }
    },
    addNewStudent : (student) =>{
        return{
            type:type.ADD_NEW_STUDENT,
            payload:{
                student:student,
            }
        }
    },
    searchStudent : (s) =>{
        return{
            type:type.SEARCH_STUDENT,
            payload:{
                search:s,
            }
        }
    },
    deleteStudent : (id) =>{
        return{
            type:type.DELETE_STUDENT,
            payload:{
                id:id,
            }
        }
    },
}
export default {type,action}