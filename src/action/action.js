import { createAction } from 'redux-actions';
import * as constants from './constant';

// Login Actions
export const userLoginRequest = createAction(constants.USER_LOGIN_REQUEST);
export const userLoginSuccess = createAction(constants.USER_LOGIN_SUCCESS);
export const userLoginFailed = createAction(constants.USER_LOGIN_FAILED);

// Signout Actions
export const userLogoutRequest = createAction(constants.USER_LOGOUT_REQUEST);
export const userLogoutSuccess = createAction(constants.USER_LOGOUT_SUCCESS);
export const userLogoutFailed = createAction(constants.USER_LOGOUT_FAILED);

// Signup Actions
export const userSignupRequest = createAction(constants.USER_SIGNUP_REQUEST);
export const userSignupRequest = createAction(constants.USER_SIGNUP_SUCCESS);
export const userSignupRequest = createAction(constants.USER_SIGNUP_FAILED);
