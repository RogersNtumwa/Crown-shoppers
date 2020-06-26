import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB36WiqiZYnEwU3EGjvUj2L57Oy6NSaDzw",
  authDomain: "crown-db-d822f.firebaseapp.com",
  databaseURL: "https://crown-db-d822f.firebaseio.com",
  projectId: "crown-db-d822f",
  storageBucket: "crown-db-d822f.appspot.com",
  messagingSenderId: "257845053645",
  appId: "1:257845053645:web:0214ce10f5302252e5c184",
  measurementId: "G-X6M6FWZG3Q",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating User ", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
