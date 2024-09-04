// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5NSBSY0NzXQ5nZivNAc7eFn0ntO3RKDk",
  authDomain: "login-auth-ca956.firebaseapp.com",
  projectId: "login-auth-ca956",
  storageBucket: "login-auth-ca956.appspot.com",
  messagingSenderId: "652781105476",
  appId: "1:652781105476:web:128930b221eba8d3eee711",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;
