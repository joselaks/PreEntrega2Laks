import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAyzq4p1a4pu4Rv18zBgnVBLNJjSLFTmhY",
  authDomain: "tpreactlaks.firebaseapp.com",
  projectId: "tpreactlaks",
  storageBucket: "tpreactlaks.appspot.com",
  messagingSenderId: "1068444491645",
  appId: "1:1068444491645:web:cb1771d53bde1957f83614"
};

// Initialize Firebase
initializeApp(firebaseConfig)

const db = getFirestore()

export default db