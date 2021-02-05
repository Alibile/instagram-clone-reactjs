import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyDrXXRQL1_P4Git1a4RgPeakN6SE97_Cc4",
    authDomain: "inst-clone-react-ca3a4.firebaseapp.com",
    projectId: "inst-clone-react-ca3a4",
    storageBucket: "inst-clone-react-ca3a4.appspot.com",
    messagingSenderId: "1091622065670",
    appId: "1:1091622065670:web:cd5b34d7ec9194a509d587",
    measurementId: "G-RVXT5E82MN"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };