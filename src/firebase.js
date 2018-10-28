import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyBlSAflqHZTJHjqZe-pfw25PM32Qj1fbpc",
    authDomain: "m-city-c4839.firebaseapp.com",
    databaseURL: "https://m-city-c4839.firebaseio.com",
    projectId: "m-city-c4839",
    storageBucket: "m-city-c4839.appspot.com",
    messagingSenderId: "655897436730"
  };

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
    firebase,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams,
    firebasePlayers,
    firebaseDB
}