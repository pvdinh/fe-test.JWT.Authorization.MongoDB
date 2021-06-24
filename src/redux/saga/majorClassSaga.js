import {all, call, put, takeEvery, takeLatest} from "redux-saga/effects";
import majorCLassActions from "../actions/majorCLassActions";
import {addStudentToClass, getListMajorClass} from "../../services/MajorClassApiServices";

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
        const response = yield call(getListMajorClass)
        yield put({type: majorCLassActions.type.GET_LIST_MAJOR_CLASS_SUCCESS, payload: response.data})
    }catch (e) {
        console.log("err",e)
    }
}

function* listen() {
    yield takeEvery(majorCLassActions.type.GET_LIST_MAJOR_CLASS, getListMajorClassSaga)
    yield takeEvery(majorCLassActions.type.ADD_STUDENT_TO_CLASS, addStudentToClassSaga)
}

function* majorClassSaga() {
    yield all([listen()])
}

export default majorClassSaga