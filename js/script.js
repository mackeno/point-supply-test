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


// Get the referrer code from URL parameters
let params = new URLSearchParams(location.search);
let referrerCode = params.get('referrer');

// Find the referrer input field
let referrerGroup = document.getElementById('referrerGroup');
let referrerInput = document.getElementById('referrerInput');
if (referrerCode) {
  // If referrer code is in the URL, show the input field and set the value
  referrerGroup.style.display = 'block';
  referrerInput.value = referrerCode;
} else {
  // If referrer code is not in the URL, hide the input field
  referrerGroup.style.display = 'none';
}
  
// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var openModalButton = document.getElementById("openModalButton");
// Get the <span> element that closes the modal
var closeModalButton = document.getElementById("closeModalButton");

// When the user clicks the button, open the modal 
openModalButton.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
closeModalButton.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Retrieve the "First Name" input element
const emailInput = document.getElementById("email");

// Add event listener to the form on submit
document.getElementById("contact-form").addEventListener("submit", function() {
  // Store the value of the "First Name" input element into local storage
  localStorage.setItem("email", emailInput.value);
});


