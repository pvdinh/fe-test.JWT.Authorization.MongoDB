import studentActions from "../actions/studentActions";

let inItState={
    listStudents:[],
    listStudentsResultSearch:[],
}
const studentReducer = (state = inItState,action) =>{
    switch (action.type) {
        case studentActions.type.GET_ALL_STUDENTS_SUCCESS:
            return {...inItState,listStudents:[...action.data]}
        case studentActions.type.GET_STUDENTS_SEARCH_SUCCESS:
            return {...inItState,listStudentsResultSearch:[...action.data]}
        default:
            return {...inItState}
    }
}
export default studentReducer