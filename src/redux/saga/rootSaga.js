import studentSaga from "./studentSaga";
import { all } from 'redux-saga/effects'
import loginSaga from "./loginSaga";
import majorClassSaga from "./majorClassSaga";

export default function* rootSaga() {
    yield all([
        studentSaga(),
        loginSaga(),
        majorClassSaga(),
    ])
}