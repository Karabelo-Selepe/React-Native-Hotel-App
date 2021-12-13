// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR6O2HdvM6IJOaThGtEn0FAPYC5ufOzfE",
  authDomain: "hotel-app-b758e.firebaseapp.com",
  projectId: "hotel-app-b758e",
  storageBucket: "hotel-app-b758e.appspot.com",
  messagingSenderId: "8475636061",
  appId: "1:8475636061:web:4e203677c68c93bd9178b4"
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const db = firebase.firestore();
const storageRef = firebase.storage().ref();

const fb = firebase.storage.TaskEvent.STATE_CHANGED;

export { auth, db, storageRef, fb };