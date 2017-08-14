import { call, put } from 'redux-saga/effects';
import * as actions from '../../action/action';
import { fireApi } from '../api';

export default function* createLoginRequest(action) {
  try {
    const response = yield call(fireApi, action.payload);
    if (response.error === 0) {
      yield put(actions.userLoginSuccess(response));
    } else if (response.error === 1) {
      yield put(actions.userLoginFailed(response));
    }
  } catch (e) {
    // handle error if any
  }
}
