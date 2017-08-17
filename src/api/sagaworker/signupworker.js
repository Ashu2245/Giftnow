import { call, put } from 'redux-saga/effects';
import * as actions from '../../action/action';
import { firebaseSignup } from '../api';

export default function* createUserRequest(action) {
  try {
    const response = yield call(firebaseSignup, action.payload);
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
