import * as firebase from 'firebase';
import { firebaseApp, API_URL } from '../config/config';

export function userRegister(email, password) {
  return firebaseApp.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return (errorCode, errorMessage);
  });
}
export function userProfileupdate(userId, fname, lname, token, avatar) {
  return firebaseApp.database().ref(`/data/userinfo/${userId}/profile`).update({
    firstname: fname,
    lastname: lname,
    cstoken: token,
    id: userId,
    avatar,
  });
}
export function userToken(uid, name, email, password) {
  const test = new Date().getTime();
  return firebaseApp.database().ref(`/data/profile/${uid}/profile`).set({
    name,
    email,
    password,
    id: uid,
    timestamp: test,
  });
}
export function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
export function userLogin(email, password) {
  return firebaseApp.auth().signInWithEmailAndPassword(email, password).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return (errorCode, errorMessage);
  });
}

export function getSignOut() {
  const test = firebaseApp.auth().signOut().then(val => val).catch(error => error);
  return test;
}

export function sendEmailVerification() {
  return firebaseApp.auth().currentUser.sendEmailVerification();
}

export function resetPassword(email) {
  return firebaseApp.auth().sendPasswordResetEmail(email);
}
