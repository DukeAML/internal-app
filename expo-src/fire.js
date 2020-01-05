import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAIv92zwY-FJ3or3J4xjT-1jbNJ4UtfarM",
    authDomain: "daml-internal.firebaseapp.com",
    databaseURL: "https://daml-internal.firebaseio.com",
    projectId: "daml-internal",
    storageBucket: "daml-internal.appspot.com",
    messagingSenderId: "181407523472",
    appId: "1:181407523472:web:a19c2bc88af0b87e2bee15",
    measurementId: "G-MF8XB1L4ZS"
  };

var fire = firebase.initializeApp(firebaseConfig);
export default fire;