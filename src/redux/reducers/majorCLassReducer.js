import majorCLassActions from "../actions/majorCLassActions";

const initState={
    listMajorsClass:[],
}
const majorClassReducer = (state = initState,action) => {
    switch (action.type) {
        case majorCLassActions.type.GET_LIST_MAJOR_CLASS_SUCCESS:
            return {...state,listMajorsClass: action.payload}
        default :
            return {...state}
    }
}
export default majorClassReducer