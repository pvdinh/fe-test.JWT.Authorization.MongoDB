import {all, call, put, takeEvery, takeLatest} from "redux-saga/effects";
import majorCLassActions from "../actions/majorCLassActions";
import {
    addStudentToClass, deleteStudentFromMajorClass,
    getAllStudentsByIdClass,
    getListMajorClass,
    getMajorClassById
} from "../../services/MajorClassApiServices";
import studentActions from "../actions/studentActions";
import notification from '../../components/notification'

function* getListMajorClassSaga(action) {
    try {
        const response = yield call(getListMajorClass)
        yield action.callback(response.data)
        yield put({type: majorCLassActions.type.GET_LIST_MAJOR_CLASS_SUCCESS, payload: response.data})
    } catch (e) {
        console.log("err", e)
    }
}

function *addStudentToClassSaga(action) {
    try {
        const res = yield call(addStudentToClass,action.payload)
        if(res.statusCode === 200){
            const response = yield call(getListMajorClass)
            yield put({type: majorCLassActions.type.GET_LIST_MAJOR_CLASS_SUCCESS, payload: response.data})
            notification('success','Thông báo','Thêm thành công !')
        }else {
            notification('error','Thông báo','Thêm thất bại do sinh viên này đã tồn tại trong lớp !')
        }
    }catch (e) {
        console.log("err",e)
    }
}

function *deleteStudentFromMajorClassSaga(action) {
    try {
        const res = yield call(deleteStudentFromMajorClass,action.payload)
        if(res.statusCode === 200){
            const response = yield call(getAllStudentsByIdClass,action.payload.majorClass.id)
            yield put({type: majorCLassActions.type.GET_ALL_STUDENTS_BY_ID_CLASS_SUCCESS, data: response.data})
            notification('success','Thông báo','Xoá thành công !')
        }
    }catch (e) {
        console.log("err",e)
    }
}

function* getAllStudentsByIdClassSaga(action) {
    try {
        const response = yield call(getAllStudentsByIdClass,action.payload.id)
        yield put({type: majorCLassActions.type.GET_ALL_STUDENTS_BY_ID_CLASS_SUCCESS, data: response.data})
    } catch (e) {
        window.location.href='/403'
        // notification('error','Thông báo','Bạn không có quyền truy cập trang web này!')
        console.log('err', e)
    }
}

function* getMajorClassByIdSaga(action) {
    try {
        const response = yield call(getMajorClassById,action.payload.id)
        yield action.callback(response.data)
    } catch (e) {
        console.log('err', e)
    }
}

function* listen() {
    yield takeEvery(majorCLassActions.type.GET_LIST_MAJOR_CLASS, getListMajorClassSaga)
    yield takeEvery(majorCLassActions.type.ADD_STUDENT_TO_CLASS, addStudentToClassSaga)
    yield takeEvery(majorCLassActions.type.GET_ALL_STUDENTS_BY_ID_CLASS, getAllStudentsByIdClassSaga)
    yield takeEvery(majorCLassActions.type.GET_MAJOR_CLASS_BY_ID, getMajorClassByIdSaga)
    yield takeEvery(majorCLassActions.type.DELETE_STUDENT_FROM_MAJOR_CLASS, deleteStudentFromMajorClassSaga)
}

function* majorClassSaga() {
    yield all([listen()])
}

export default majorClassSaga