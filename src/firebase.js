import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqMSkxUxAhcDRFYLHUdLAFZUAtgjSUr80",
  authDomain: "challenge-68be5.firebaseapp.com",
  projectId: "challenge-68be5",
  storageBucket: "challenge-68be5.appspot.com",
  messagingSenderId: "609877343986",
  appId: "1:609877343986:web:5e1557f37c5a93e2c65a6b",
  measurementId: "G-5FKQR9PWRC"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};