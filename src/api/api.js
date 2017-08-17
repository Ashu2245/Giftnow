import * as data from '../sampleData/data.json';
import { firebaseApp } from '../config/config';

export function fireApi(payload) {
  if (payload.email === data.login.username && payload.password === data.login.password) {
    return data.success;
  }
  return data.failed;
}

export function signoutApi(payload) {
  if (payload.email === data.login.username) {
    return data.signoutSucess;
  }
  return data.signoutfailed;
}

export function firebaseLogin(payload) {
  if (payload.email !== '' && payload.password !== '') {
    firebaseApp.auth().signInWithEmailAndPassword(payload.email, payload.password).then((user) => {
      console.log(user);
    });
  }
}

export function firebaseSignup(payload) {
  if (payload.email !== '' && payload.password !== '') {
    firebaseApp.auth().createUserWithEmailAndPassword(payload.email, payload.password).then((data) => {
      console.log(data);
    });
  }
}
