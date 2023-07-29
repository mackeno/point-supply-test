// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";

import { getFirestore, doc, getDoc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYHaeiMYKtdP1k_hkjZuE06AIM2bovN34",
    authDomain: "pointsupply-sandbox.firebaseapp.com",
    projectId: "pointsupply-sandbox",
    storageBucket: "pointsupply-sandbox.appspot.com",
    messagingSenderId: "351299572223",
    appId: "1:351299572223:web:ff3748f534d3d4c75897ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//Save Document into the "referrals" collection
const docRef = doc(db, "referrals", "iamdennyvl@gmail.com");
await updateDoc(docRef, {
  "3": "another@email.com"
});

//Get Document from Firestore
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    document.getElementById("temp").textContent = docSnap.data()["1"];
} else {

}