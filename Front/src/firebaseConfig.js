/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDILteGIi7Fc_i3PtZXHyuyvlFl8lGNufY",
  authDomain: "otp-project-478c5.firebaseapp.com",
  projectId: "otp-project-478c5",
  storageBucket: "otp-project-478c5.appspot.com",
  messagingSenderId: "1003797138293",
  appId: "1:1003797138293:web:03583014ba98008526213c",
  measurementId: "G-40L604WSYW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
