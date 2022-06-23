import * as firebase from 'firebase';
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyB_y_QZL3L0xbJdbmlvM8dC2boXYOfa60Q",
    authDomain: "todo-list-application-fa178.firebaseapp.com",
    projectId: "todo-list-application-fa178",
    storageBucket: "todo-list-application-fa178.appspot.com",
    messagingSenderId: "736301619851",
    appId: "1:736301619851:web:2d4bb2e48e3c96164fd28e",
    measurementId: "G-CPVSEJ1ZH9"
});

await setDoc(doc(firestore, "characters", "mario"), {
    employment: "plumber",
    outfitColor: "red",
    specialAttack: "fireball"
  });
  
export const fireDB = app.firestore();
export default app;