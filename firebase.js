// firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Replace this config with your Firebase project's details
const firebaseConfig = {
  apiKey: 'AIzaSyBuXYzlgPt2LqrSD3V2Bo1EnzZcej-6ORg',
  authDomain: 'YOUR_PROJECT_ID.firebaseapp.com',
  projectId: 'firstproject-df175',
  storageBucket: 'YOUR_PROJECT_ID.appspot.com',
  messagingSenderId: 'YOUR_SENDER_ID',
  appId: 'AIzaSyBuXYzlgPt2LqrSD3V2Bo1EnzZcej-6ORg',
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // If already initialized
}

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };
