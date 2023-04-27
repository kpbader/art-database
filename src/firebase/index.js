// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; // for the db
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7anFRQsow0h_Dn8LBU_YwQ_kQHFZLKpk",
  authDomain: "art-database-app.firebaseapp.com",
  projectId: "art-database-app",
  storageBucket: "art-database-app.appspot.com",
  messagingSenderId: "917246917319",
  appId: "1:917246917319:web:3309e36bb1dd3736445ce2",
  measurementId: "G-2HEMHS2ZZX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const auth = firebase.auth(); 

// creates user profile in Firebase
const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) { return; }   

  const userRef = firestore.doc(`users/${userAuth.multiFactor.user.uid}`); // unique id per user
  const snapShot = await userRef.get(); 

  // if there is no profile, create one 
  if (!snapShot.exists) {
    const { firstname, lastname, location, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({firstname, lastname, location, email, createdAt, ...additionalData, });
    } catch (error) {
        console.log('error creating user', error.message);
      }   
   }
return userRef;
}; 

export { firestore, createUserProfileDocument, auth };