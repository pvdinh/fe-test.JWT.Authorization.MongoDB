import {all, call, put, takeEvery, takeLatest} from "redux-saga/effects";
import majorCLassActions from "../actions/majorCLassActions";
import {getListMajorClass} from "../../services/MajorClassApiServices";

function* getListMajorClassSaga() {
    try {
        const response = yield call(getListMajorClass)
        yield put({type: majorCLassActions.type.GET_LIST_MAJOR_CLASS_SUCCESS, payload: response.data})
    } catch (e) {
        console.log("err", e)
    }
}

function* listen() {
    yield takeEvery(majorCLassActions.type.GET_LIST_MAJOR_CLASS, getListMajorClassSaga)
}

function* majorClassSaga() {
    yield all([listen()])
}

export default majorClassSaga