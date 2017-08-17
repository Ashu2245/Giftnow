/* eslint-disable no-shadow */
import { GoogleSignin } from 'react-native-google-signin';
import { Platform } from 'react-native';

export function googleLogin() {
  return new Promise((resolve, reject) => {
    if (Platform.OS === 'ios') {
      GoogleSignin.hasPlayServices({ autoResolve: true });
      GoogleSignin.configure({
        iosClientId: '837766025504-upclvd5ere8ubaim1h7mv2nrtipvumg2.apps.googleusercontent.com',
        webClientId: '837766025504-upclvd5ere8ubaim1h7mv2nrtipvumg2.apps.googleusercontent.com',
        offlineAccess: false,
      });
      GoogleSignin.signIn().then((user) => {
        console.log(user);
        resolve(user);
      }).catch((err) => {
        console.log(err);
        reject(err);
      });
    } else if (Platform.OS === 'android') {
      GoogleSignin.hasPlayServices({ autoResolve: true }).then(() => {
        // play services are available. can now configure library
        GoogleSignin.configure({
          iosClientId: '837766025504-upclvd5ere8ubaim1h7mv2nrtipvumg2.apps.googleusercontent.com',
          webClientId: '837766025504-upclvd5ere8ubaim1h7mv2nrtipvumg2.apps.googleusercontent.com',
          offlineAccess: false,
        }).then(() => {
          // you can now call currentUserAsync()
          GoogleSignin.currentUserAsync().then((user) => {
            if (user !== null) {
              resolve(user);
            } else {
              GoogleSignin.signIn().then((user) => {
                console.log(user);
                resolve(user);
              }).catch((err) => {
                console.log('error');
                reject(err);
              });
            }
          }).catch(() => {
            console.log('error');
            reject('Could Not Get Current User');
          });
        }).catch((err) => {
          console.log('err');
          reject('Configure Failed');
        });
      }).catch(() => {
        reject(new Error('Google Play Services Not Configured'));
      });
    }
  });
}
export function googleSignOut() {
  return new Promise((resolve, reject) => {
    if (Platform.OS === 'ios') {
      GoogleSignin.configure({
        iosClientId: '837766025504-upclvd5ere8ubaim1h7mv2nrtipvumg2.apps.googleusercontent.com',
        webClientId: '837766025504-upclvd5ere8ubaim1h7mv2nrtipvumg2.apps.googleusercontent.com',
        offlineAccess: false,
      });
      GoogleSignin.revokeAccess().then(() => {
        GoogleSignin.signOut().then(() => {
          const out = true;
          resolve(out);
        }).catch((err) => {
          reject(err);
        });
      });
    } else if (Platform.OS === 'android') {
      GoogleSignin.configure({}).then(() => {
        GoogleSignin.signOut().then(() => {
          const out = true;
          resolve(out);
        }).catch((err) => {
          reject(err);
        });
      });
    }
  });
}
