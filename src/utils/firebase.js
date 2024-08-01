// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBto-LXt47KGstnO7aEKlqX_UzpWFPuEmE",
  authDomain: "cyberflix-5d25a.firebaseapp.com",
  projectId: "cyberflix-5d25a",
  storageBucket: "cyberflix-5d25a.appspot.com",
  messagingSenderId: "597480899841",
  appId: "1:597480899841:web:f4e70c1ad66a7b33f48700",
  measurementId: "G-VWVZRBWCJF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();