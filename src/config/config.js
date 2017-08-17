import * as firebase from 'firebase';

export const config = {
  apiKey: 'AIzaSyBg6Vfk3Clk-ofFuSVNB9e-7y7gVAgH28M',
  authDomain: 'giftnow-e2cda.firebaseapp.com',
  databaseURL: 'https://giftnow-e2cda.firebaseio.com',
  projectId: 'giftnow-e2cda',
  storageBucket: 'giftnow-e2cda.appspot.com',
  messagingSenderId: '837766025504',
  persistence: true,
};
export const API_URL = 'https://fcm.googleapis.com/fcm/send';
export const firebaseApp = firebase.initializeApp(config);
