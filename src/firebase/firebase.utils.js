import firebase from 'firebase/app'; //
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

const config ={
    apiKey: "AIzaSyC2ClDRKBszjCKVZCSsGBzNAv6BaDROZEI",
    authDomain: "ecommerce-db-f8e9e.firebaseapp.com",
    projectId: "ecommerce-db-f8e9e",
    storageBucket: "ecommerce-db-f8e9e.appspot.com",
    messagingSenderId: "131745044039",
    appId: "1:131745044039:web:ff98c39ab0f1dbc6154362",
    measurementId: "G-RG71STV8P9"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'}) //always prompt google authentication pop up

  export const signInWithGoogle =()=>auth.signInWithPopup(provider);

  export default firebase;