import { call, put } from 'redux-saga/effects';
import * as actions from '../../action/action';
import { signoutApi } from '../api';

export default function* signoutWorker(action) {
  console.log(action);
  try {
    const response = yield call(signoutApi, action.payload);
    if (response.error === 0) {
      yield put(actions.userLogoutSuccess(response));
    } else if (response.error === 1) {
      yield put(actions.userLogoutFailed(response));
    }
  } catch (e) {
    // handle error if any
  }
}
