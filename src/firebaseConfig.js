// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFG1Wq0ZfFNQJOB6wzJbtM3w5KB88f-CU",
  authDomain: "daily-kamao-6c354.firebaseapp.com",
  projectId: "daily-kamao-6c354",
  storageBucket: "daily-kamao-6c354.firebasestorage.app",
  messagingSenderId: "294711948172",
  appId: "1:294711948172:web:2356f546a9e07fd4c0dca9",
  measurementId: "G-SG0EV2L8T1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
