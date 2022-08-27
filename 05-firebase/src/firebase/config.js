
// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBDIjm7GKIGgJwgQBa9CR-Oz334mxPzkqU",
  authDomain: "fir-7f478.firebaseapp.com",
  projectId: "fir-7f478",
  storageBucket: "fir-7f478.appspot.com",
  messagingSenderId: "993363148213",
  appId: "1:993363148213:web:359ee8a5d29fef4dfe6dfc",
  measurementId: "G-7Y0G2DZE7Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

// export default auth;
export { auth, firebaseApp}; 
export default db;