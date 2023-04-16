import firebase from 'firebase/compat/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBWlyK9HBaOeFGaaqRVyd2xMff8ukCAdng",
    authDomain: "seyahat-sitesi.firebaseapp.com",
    projectId: "seyahat-sitesi",
    storageBucket: "seyahat-sitesi.appspot.com",
    messagingSenderId: "763300342561",
    appId: "1:763300342561:web:fb21e38275bcfad084ac60",
    measurementId: "G-P13G4J04TZ"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


export default db;
