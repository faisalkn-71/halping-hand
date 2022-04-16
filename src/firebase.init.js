// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0az0grIEGVgFaTMl46WEtitwbHcrRmco",
  authDomain: "helping-hand-df968.firebaseapp.com",
  projectId: "helping-hand-df968",
  storageBucket: "helping-hand-df968.appspot.com",
  messagingSenderId: "675748817153",
  appId: "1:675748817153:web:7a104e434dbb21eb7cd300"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

