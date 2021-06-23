import {all, call, put, takeLatest} from "redux-saga/effects";
import {authLogin} from "../../services/AuthApiServices";
import login from '../actions/loginActions'
import notification from '../../components/notification'

function* loginSuccessSaga(action) {
    try {
        const response = yield call(authLogin, action.payload)
        if (response.statusCode === 200) {
            yield localStorage.setItem("sessionToken", response.sessionToken)
            yield localStorage.setItem("currentUser", response.currentUser)
            yield put({type: login.type.LOGIN_SUCCESS, isLogin: true})
            yield notification(
                'success',
                'Đăng nhập thành công',
                'Xin chào ' + JSON.parse(response.currentUser).username,
            )
        } else {
            yield notification(
                'warning',
                'Đăng nhập không thành công',
                'Sai tài khoản hoặc mật khẩu ',
            )
        }
    } catch (e) {
        console.log("err", e)
    }
}

function* logoutSuccessSaga() {
    try {
        yield localStorage.removeItem("sessionToken")
        yield put({type: login.type.LOGOUT_SUCCESS, isLogin: false})
        yield notification(
            'success',
            'Đăng xuất thành công',
            'tạm biệt ',
        )
    } catch (e) {
        console.log("err", e)
    }
}

function* listen() {
    yield takeLatest(login.type.LOGIN, loginSuccessSaga)
    yield takeLatest(login.type.LOGOUT, logoutSuccessSaga)
}

export default function* loginSaga() {
    yield all([listen()])
}