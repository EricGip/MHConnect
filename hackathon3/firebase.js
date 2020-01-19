import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAfeSpKeC4HUU9ZAz1QawQbdnw3tXISspI",
    authDomain: "earnest-star-265609.firebaseapp.com",
    databaseURL: "https://earnest-star-265609.firebaseio.com",
    projectId: "earnest-star-265609",
    storageBucket: "earnest-star-265609.appspot.com",
    messagingSenderId: "538110857414",
    appId: "1:538110857414:web:81eb75963a06c139b647c7"
  };
firebase.initializeApp(config);


export default firebase;