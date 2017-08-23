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
    return firebaseApp.auth().signInWithEmailAndPassword(payload.email, payload.password).then(user => user);
  }
}

export async function firebaseSignup(payload) {
  if (payload.email !== '' && payload.password !== '') {
    return firebaseApp.auth().createUserWithEmailAndPassword(payload.email, payload.password).catch(error => error);
  }
}
