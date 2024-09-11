// Import the functions you need from the SDKs you need
import {getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2HymamRbTWJDTBrndTi43qpy98UeHW5g",
    authDomain: "e-commerce-app-c39a5.firebaseapp.com",
    projectId: "e-commerce-app-c39a5",
    storageBucket: "e-commerce-app-c39a5.appspot.com",
    messagingSenderId: "725154150360",
    appId: "1:725154150360:web:693cb19058376a0c3124ad"
  };

// Initialize Firebase
const app = getApps.length?getApp():initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth(app);

export default db;
export {auth}