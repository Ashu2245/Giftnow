import { call, put } from 'redux-saga/effects';
import * as actions from '../../action/action';
import { firebaseLogin } from '../api';

export default function* createLoginRequest(action) {
  try {
    const response = yield call(firebaseLogin, action.payload);
    console.log(response);
    if (response.uid) {
      yield put(actions.userSignupSuccess(response));
    } else if (response.code) {
      yield put(actions.userSignupFailed(response));
    }
  } catch (e) {
    // handle error if any
  }
}
