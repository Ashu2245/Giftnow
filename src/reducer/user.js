import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import * as constants from '../action/constant';
import './update';

export const initialState = {
  userLogin: {
    data: [],
    error: [],
    isSuccess: false,
    isError: false,
  },
  signout: {
    data: [],
    error: [],
    isSuccess: false,
    isError: false,
  },
};

const userLoginSuccess = (state, action) => update(state, {
  userLogin: { $setRequestSuccess: action.payload },
});

const userLoginFailed = (state, action) => update(state, {
  userLogin: { $setRequestFailed: action.payload },
});

const userLogoutSuccess = (state, action) => update(state, {
  signout: { $setRequestSuccess: action.payload },
  userLogin: { $setRequestFailed: { data: { data: [] } } },
});

const userLogoutFailed = (state, action) => update(state, {
  signout: { $setRequestFailed: action.payload },
});

export default handleActions({
  [constants.USER_LOGIN_SUCCESS]: userLoginSuccess,
  [constants.USER_LOGIN_FAILED]: userLoginFailed,

  [constants.USER_LOGOUT_SUCCESS]: userLogoutSuccess,
  [constants.USER_LOGOUT_FAILED]: userLogoutFailed,
}, initialState);
