// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr168wNyXuomN86qyfbNk6z9fMv6jKO9Y",
  authDomain: "higher-lower-66e66.firebaseapp.com",
  projectId: "higher-lower-66e66",
  storageBucket: "higher-lower-66e66.appspot.com",
  messagingSenderId: "270047439462",
  appId: "1:270047439462:web:ad454a2f62c44499689ba7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);