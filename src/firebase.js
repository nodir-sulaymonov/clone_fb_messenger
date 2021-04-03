import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyD86hlyIF5TVTE1hzxxNnRvCLSl3ZnguoQ",
    authDomain: "clone-fb-messenger-6be58.firebaseapp.com",
    projectId: "clone-fb-messenger-6be58",
    storageBucket: "clone-fb-messenger-6be58.appspot.com",
    messagingSenderId: "381835979773",
    appId: "1:381835979773:web:e1684fea9a43b78e198794",
    measurementId: "G-6S5MTJWNH6"

});

const db = firebaseApp.firestore();

export default db;
