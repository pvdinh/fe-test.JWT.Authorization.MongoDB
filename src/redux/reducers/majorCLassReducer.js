import majorCLassActions from "../actions/majorCLassActions";

const initState={
    listMajorsClass:[],
    listStudents:[],
    listStudentsResultSearch:[],
}
const majorClassReducer = (state = initState,action) => {
    switch (action.type) {
        case majorCLassActions.type.GET_LIST_MAJOR_CLASS_SUCCESS:
            return {...state,listMajorsClass: action.payload}
        case majorCLassActions.type.GET_ALL_STUDENTS_BY_ID_CLASS_SUCCESS:
            return {...state,listStudents: action.data}
        default :
            return {...state}
    }
}
export default majorClassReducer