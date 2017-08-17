import { call, put } from 'redux-saga/effects';
import * as actions from '../../action/action';
import { fireApi } from '../api';

export default function* createUserRequest(action) {
  try {
    const response = yield call(fireApi, action.payload);
    if (response.error === 0) {
      yield put(actions.userSignupSuccess(response));
    } else if (response.error === 1) {
      yield put(actions.userSignupFailed(response));
    }
  } catch (e) {
    // handle error if any
  }
}
