import * as data from '../sampleData/data.json';

export function fireApi(payload) {
  console.log(data);
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
