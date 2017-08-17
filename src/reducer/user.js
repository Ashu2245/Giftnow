import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import * as constants from '../action/constant';
import './update';

export const initialState = {
  signout: {
    data: [],
    error: [],
    isSuccess: false,
    isError: false,
  },
  signup: {
    data: [],
    error: [],
    isSuccess: false,
    isError: false,
  },
};

const userLogoutSuccess = (state, action) => update(state, {
  signout: { $setRequestSuccess: action.payload },
  userLogin: { $setRequestFailed: { data: { data: [] } } },
});

const userLogoutFailed = (state, action) => update(state, {
  signout: { $setRequestFailed: action.payload },
});

const userSignupSuccess = (state, action) =>
  update(state, {
    signup: { $setSignupRequestSuccess: action.payload },
  });

const userSignupFailed = (state, action) =>
  update(state, {
    signup: { $setSignupRequestFailed: action.payload },
  });

export default handleActions({
  [constants.USER_LOGOUT_SUCCESS]: userLogoutSuccess,
  [constants.USER_LOGOUT_FAILED]: userLogoutFailed,

  [constants.USER_SIGNUP_SUCCESS]: userSignupSuccess,
  [constants.USER_SIGNUP_FAILED]: userSignupFailed,
}, initialState);
