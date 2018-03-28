import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBdEZCkLlwxNccneQlyEYwjYwdnFwS9ScE",
  authDomain: "catch-of-the-day-ramon.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-ramon.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
