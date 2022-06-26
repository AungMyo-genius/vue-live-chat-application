import { initializeApp } from "firebase/app";
import { getFirestore,
         serverTimestamp,
         collection,
         addDoc,
         onSnapshot,
         query } from "firebase/firestore"

import { getAuth,
         createUserWithEmailAndPassword,
         updateProfile,
         signInWithEmailAndPassword,
         signOut,
         onAuthStateChanged } from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjzbhYC3Bo-lXdgB6d7k4IW7-mS0TJaBI",
  authDomain: "vue-live-chat-12f38.firebaseapp.com",
  projectId: "vue-live-chat-12f38",
  storageBucket: "vue-live-chat-12f38.appspot.com",
  messagingSenderId: "415129219446",
  appId: "1:415129219446:web:fea4ed4ce6752804cf8a57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)


export { db
        ,auth
        ,createUserWithEmailAndPassword
        ,updateProfile
        ,signInWithEmailAndPassword
        ,signOut
        ,onAuthStateChanged
        ,serverTimestamp
        ,collection
        ,addDoc
        ,onSnapshot
        ,query
}