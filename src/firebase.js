// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtNVpWHhUgruqKFALL9s_ioIqRQ43WsN0",
  authDomain: "schooldashboard-2e58d.firebaseapp.com",
  projectId: "schooldashboard-2e58d",
  storageBucket: "schooldashboard-2e58d.appspot.com",
  messagingSenderId: "645977280467",
  appId: "1:645977280467:web:40695beca292eb7470a926",
  measurementId: "G-NG9LYYD4FV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
