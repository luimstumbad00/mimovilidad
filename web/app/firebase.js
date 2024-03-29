// Scripts de Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC61HBnHK7TTHXWRDyhKB_DliKmoVysjaI",
  authDomain: "mitransporte-768d7.firebaseapp.com",
  databaseURL: "https://mitransporte-768d7-default-rtdb.firebaseio.com",
  projectId: "mitransporte-768d7",
  storageBucket: "mitransporte-768d7.appspot.com",
  messagingSenderId: "938542202756",
  appId: "1:938542202756:web:81aafa047ad08bba12e7d1",
  measurementId: "G-FKEZ6J9W4G"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);