// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj4HoA_EwcQqPpQoB757xt-JDQMQ9JE4c",
  authDomain: "svelteappxd.firebaseapp.com",
  projectId: "svelteappxd",
  storageBucket: "svelteappxd.appspot.com",
  messagingSenderId: "910522484342",
  appId: "1:910522484342:web:57289eaa6e403d54ba8157",
  measurementId: "G-FB1R2SYFZF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);