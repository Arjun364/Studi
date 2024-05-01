import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCuDJNyq0e26Sgx_ZXJDTZ2aAX-UJ0LJnA",
  authDomain: "studi-207c3.firebaseapp.com",
  projectId: "studi-207c3",
  storageBucket: "studi-207c3.appspot.com",
  messagingSenderId: "2647129152",
  appId: "1:2647129152:web:81600ea1d3b4de9cc8b3a5",
  measurementId: "G-HBBB6V4SG8"
};


const app = initializeApp(firebaseConfig);

// Get authentication instance
export const auth = getAuth(app);

// Get Firestore instance
export const db = getFirestore(app);

// Get Firestorage instance
export const storage = getStorage(app);