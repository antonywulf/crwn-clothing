import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA5Ed-DXnQc1AVyGg1ccR7azb4qmT3Gv-0',
  authDomain: 'crwn-db-e3885.firebaseapp.com',
  projectId: 'crwn-db-e3885',
  storageBucket: 'crwn-db-e3885.appspot.com',
  messagingSenderId: '869148816727',
  appId: '1:869148816727:web:e1d42563888e9206b97a12',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
