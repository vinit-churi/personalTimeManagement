// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBEBgxZvQ6Nl4vwlu74jyqltkVkbzW3DJg",
    authDomain: "lifeclock-4ceb1.firebaseapp.com",
    projectId: "lifeclock-4ceb1",
    storageBucket: "lifeclock-4ceb1.appspot.com",
    messagingSenderId: "865785009883",
    appId: "1:865785009883:web:050750fa8f704022d0defe",
    measurementId: "G-31RKZCWFQ6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
export { app, analytics, auth };
// firebase login
// firebase init
// firebase deploy
