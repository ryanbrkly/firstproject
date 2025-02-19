// firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Replace this config with your Firebase project's details
const firebaseConfig = {
  apiKey: 'AIzaSyBuXYzlgPt2LqrSD3V2Bo1EnzZcej-6ORg',
  authDomain: 'firstproject-df175.firebaseapp.com',
  projectId: 'firstproject-df175',
  storageBucket: 'firstproject-df175.firebasestorage.app',
  messagingSenderId: '549623680611',
  appId: '1:549623680611:web:d07c8adc28b0efb834b256',
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
