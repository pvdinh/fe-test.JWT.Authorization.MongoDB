import {all, takeEvery, fork, put, call} from 'redux-saga/effects'
import studentActions from "../actions/studentActions";
import {
    addNewStudent,
    deleteStudent,
    getAllStudents,
    searchStudent,
    updateStudent
} from "../../services/StudentApiServices";
import notification from '../../components/notification'

function* saga_getAllStudents() {
    try {
        const response = yield call(getAllStudents)
        yield put({type: studentActions.type.GET_ALL_STUDENTS_SUCCESS, data: response.data})
    } catch (e) {
        console.log('err', e)
    }
}

function* saga_getUpdateStudent(action) {
    try {
        const x = yield call(updateStudent, action.payload.student)
        x.statusCode !== 200 ? notification('warning', 'Email đã tồn tại') :  notification('success', 'Chỉnh sửa thành công')
        const response = yield call(getAllStudents)
        yield put({type: studentActions.type.GET_ALL_STUDENTS_SUCCESS, data: response.data})

    } catch (e) {
        console.log('err', e)
    }
}

function * saga_deleteStudent(action) {
    try {
        yield call(deleteStudent, action.payload.id)
        const response = yield call(getAllStudents)
        yield put({type: studentActions.type.GET_ALL_STUDENTS_SUCCESS, data: response.data})
    } catch (e) {
        console.log('err', e)
    }
}

function *saga_addNewStudent(action) {
    try{
        const res = yield call(addNewStudent,action.payload.student)
        res.statusCode !== 200 ? notification('warning', 'MSV đã tồn tại') : notification('success', 'Thêm thành công')
        const response = yield call(getAllStudents)
        yield put({type: studentActions.type.GET_ALL_STUDENTS_SUCCESS, data: response.data})
    }catch (e) {
        console.log("err",e)
    }
}

function * saga_searchStudent(action) {
    try{
        const res = yield call(searchStudent,action.payload)
        yield put({type: studentActions.type.GET_STUDENTS_SEARCH_SUCCESS, data: res.data})
    }catch (e) {
        console.log("err",e)
    }
}

function* listen() {
    yield takeEvery(studentActions.type.GET_ALL_STUDENTS, saga_getAllStudents)
    yield takeEvery(studentActions.type.UPDATE_STUDENT, saga_getUpdateStudent)
    yield takeEvery(studentActions.type.DELETE_STUDENT, saga_deleteStudent)
    yield takeEvery(studentActions.type.ADD_NEW_STUDENT, saga_addNewStudent)
    yield takeEvery(studentActions.type.SEARCH_STUDENT, saga_searchStudent)
}

export default function* studentSaga() {
    yield all([listen()])
}