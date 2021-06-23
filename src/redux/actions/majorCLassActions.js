const type={
    GET_LIST_MAJOR_CLASS:"GET_LIST_MAJOR_CLASS",
    GET_LIST_MAJOR_CLASS_SUCCESS:"GET_LIST_MAJOR_CLASS_SUCCESS",
}
const action={
    getListMajorClass: () =>{
        return{
            type:type.GET_LIST_MAJOR_CLASS,
        }
    }
}
export default {type,action}