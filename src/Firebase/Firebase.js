// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbP4nkY_2hsdEnpTzORmsSEmDc3NO4FOE",
  authDomain: "carousel-app-f2fc9.firebaseapp.com",
  projectId: "carousel-app-f2fc9",
  storageBucket: "carousel-app-f2fc9.appspot.com",
  messagingSenderId: "939240878651",
  appId: "1:939240878651:web:c806f125d5c2369d91e21e",
  measurementId: "G-M27Y22266Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const database = getDatabase(app);

export default database;