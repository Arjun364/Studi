
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
// import {CompanyApikey} from '../../Process.env'


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
// const analytics = getAnalytics(app);
export const auth =getAuth(app)
export const db =getFirestore(app)
