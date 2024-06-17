// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsi3quAxlYIL4HKpijhj8e0qCclPXPuVo",
  authDomain: "github-c0ac9.firebaseapp.com",
  databaseURL: "https://github-c0ac9-default-rtdb.firebaseio.com",
  projectId: "github-c0ac9",
  storageBucket: "github-c0ac9.appspot.com",
  messagingSenderId: "886174193200",
  appId: "1:886174193200:web:3b831982fdd395b301fff5",
  measurementId: "G-C3Q3NWY5JS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
