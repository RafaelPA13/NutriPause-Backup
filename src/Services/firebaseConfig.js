import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB1OhVWBiInVSIRSJ-JT208VLnEnjeS3aw",
  authDomain: "nutripause-f13c5.firebaseapp.com",
  projectId: "nutripause-f13c5",
  storageBucket: "nutripause-f13c5.appspot.com",
  messagingSenderId: "772164676990",
  appId: "1:772164676990:web:3b854bb91170f1f294972f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);