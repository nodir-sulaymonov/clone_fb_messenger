import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyAsnwiJGkBLihiUUmt05EhbxGeNoDnbh24",
    authDomain: "clone-fb-messenger-9a034.firebaseapp.com",
    projectId: "clone-fb-messenger-9a034",
    storageBucket: "clone-fb-messenger-9a034.appspot.com",
    messagingSenderId: "904827775373",
    appId: "1:904827775373:web:75521859d3fcf0df3eb5c4",
    measurementId: "G-TTRCN1Q60L"

});

const db = firebaseApp.firestore();

export default db;
