import { takeLatest } from 'redux-saga/effects';
import * as constants from '../action/constant';
import createLoginRequest from '../api/sagaworker/loginworker';
import signoutWorker from '../api/sagaworker/signoutworker';
import createUserRequest from '../api/sagaworker/signupworker';


export function* watcherSaga() {
  yield takeLatest(constants.USER_LOGIN_REQUEST, createLoginRequest);
  yield takeLatest(constants.USER_LOGOUT_REQUEST, signoutWorker);
  yield takeLatest(constants.USER_SIGNUP_REQUEST, createUserRequest);
}

export default function* rootSaga() {
  yield [
    watcherSaga(),
  ];
}
