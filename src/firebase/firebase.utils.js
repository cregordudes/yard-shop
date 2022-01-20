import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

const config = {
   apiKey: "AIzaSyAF2dGkn4kFITltvmTBdjhVjJap4czad_o",
   authDomain: "yardshop-db.firebaseapp.com",
   projectId: "yardshop-db",
   storageBucket: "yardshop-db.appspot.com",
   messagingSenderId: "501538030401",
   appId: "1:501538030401:web:bfbcf083905b32c78417c0",
   measurementId: "G-QPBF9X0VXT"
 };

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  //console.log(userRef);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    }catch (error){
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
 
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;