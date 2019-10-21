import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDVMqhc2qgaTjBKaKzKjMlRQ04giVRv5tU",
    authDomain: "marioplan-e488b.firebaseapp.com",
    databaseURL: "https://marioplan-e488b.firebaseio.com",
    projectId: "marioplan-e488b",
    storageBucket: "marioplan-e488b.appspot.com",
    messagingSenderId: "144164884332",
    appId: "1:144164884332:web:8a4016a3ba72e556b8ed49",
    measurementId: "G-T9RT4BZN6Z"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;