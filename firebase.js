import {initializeApp , getApp , getApps} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCCe_fPSNgG_BCJCWMychNxzbDwE5FhhTw",
  authDomain: "twitter-clone-80b41.firebaseapp.com",
  projectId: "twitter-clone-80b41",
  storageBucket: "twitter-clone-80b41.appspot.com",
  messagingSenderId: "957702010712",
  appId: "1:957702010712:web:384a9cab75405841cbd72d",
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()


export default app 
export {db , storage}