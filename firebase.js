import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUfwwYvUYx3B_NaUX_xRpAImJoypxRlzI",
    authDomain: "todo-list-application-9e112.firebaseapp.com",
    projectId: "todo-list-application-9e112",
    storageBucket: "todo-list-application-9e112.appspot.com",
    messagingSenderId: "1022773035166",
    appId: "1:1022773035166:web:43c59fb374a63594747b8f",
    measurementId: "G-SZ4RPHYHST"
};

export const app = initializeApp(firebaseConfig);
// MARK: Firestore Reference
export const db = getFirestore(app);