import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmvD48F9Yc-e95wt7vQLmpeVLt5NIdJoo",
  authDomain: "ecommerce-79d3c.firebaseapp.com",
  projectId: "ecommerce-79d3c",
  databaseURL:"https://ecommerce-79d3c.firebaseapp.com",
  storageBucket: "ecommerce-79d3c.appspot.com",
  messagingSenderId: "443912812286",
  appId: "1:443912812286:web:c059523d388e765e3617af"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
   
  // export
  export const auth = firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); 