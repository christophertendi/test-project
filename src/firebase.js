import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { getStorage } from 'firebase/storage'

// // import {getFirestore} from 'firebase/firestore'
// import {getStorage} from 'firebase/storage'

// import {initializeApp} from 'firebase/app'
// import {getAuth} from 'firebase/auth'
// import {getFirestore} from 'firebase/firestore'
// import { updateDoc, serverTimestamp } from "firebase/firestore";


const app = firebase.initializeApp({
    apiKey: "AIzaSyBdOHdkHxfJHfsZ-eH_fM_OKY4X3VNC4AY",
    databaseURL: "https://bruh-idk-672a9.firebaseio.com",
    authDomain: "bruh-idk-672a9.firebaseapp.com",
    projectId: "bruh-idk-672a9",
    storageBucket: "bruh-idk-672a9.appspot.com",
    messagingSenderId: "713939772583",
    appId: "713939772583:web:2b346c2fc35244f4bae782"
})

export const storage = getStorage(app)
export const auth = app.auth()
export default app


// const app = initializeApp(firebaseConfig);
// const firestore = getFirestore(app);
// const auth = getAuth();
// const docRef = doc(database,'objects', '')
// const getCurrentTime = await updateDoc()

// const firestore = app.firestore()
// export const database = {
//     folders: firestore.collection('folders'),
//     files: firestore.collection('files'),
//     formatDoc: doc => { 
//         return {id: doc.id, ...doc.data()}
//     },
//     getCurrentTime: firebase.firestore.FieldValue.serverTimestamp,
// }





// const app = initializeApp(firebase_config)
// const auth = getAuth(app)
// const db = getFirestore(app)
// const firestore = app.firestore()
// export const database = {
//     folders: firestore.collection('folders'),
//     files: firestore.collection('files'),
//     cTimeStamp: firebase.firestore.FieldValue.serverTimestamp,
//     fDoc: doc => {
//         return{ id: doc.id,...doc.data() }
//     }

// }
