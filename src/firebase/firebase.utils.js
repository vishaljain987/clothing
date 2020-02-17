// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";


const config = {
    apiKey: "AIzaSyBMNxkX784Kj-rG5TcROnD-aemI4v_d6Kc",
    authDomain: "clothing-ecde6.firebaseapp.com",
    databaseURL: "https://clothing-ecde6.firebaseio.com",
    projectId: "clothing-ecde6",
    storageBucket: "clothing-ecde6.appspot.com",
    messagingSenderId: "497932661812",
    appId: "1:497932661812:web:f01f5245376a88bed08661"
  };


 // Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = ()=>firebase.auth().signInWithPopup(provider)

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
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectToAdd)=>{
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
    objectToAdd.forEach(obj=>{
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
      })
  
  return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections)=>{
  const transformedCollection = collections.docs.map(doc=>{
    const {title, items} = doc.data()
    return {
            id: doc.id,
            title,
            items,
            routeName: encodeURI(title.toLowerCase())
           }
  })

  //convert transformedCollection array to object
  const transformedCollectionMap = transformedCollection.reduce((acc, collection)=>{
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {})


  return transformedCollectionMap;
}

export default firebase;