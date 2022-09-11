import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";

export const firebaseConfig = process.env.FIREBASE_CONFIG
// Initialize Firebase
let firebaseApp;
if (firebase.apps.length === 0) {
  firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
  firebaseApp = firebase.app();
}

export { firebaseApp };
