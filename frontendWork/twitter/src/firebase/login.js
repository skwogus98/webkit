// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQsHOwAXjZhLrMMv5M_pzUnBRCIhCBjYM",
  authDomain: "twitter-clone-26c89.firebaseapp.com",
  projectId: "twitter-clone-26c89",
  storageBucket: "twitter-clone-26c89.appspot.com",
  messagingSenderId: "960851278663",
  appId: "1:960851278663:web:f4889983b047c1d8732a62"
};

// Initialize Firebase

let analytics; let firestore; let newData 
//https://kyounghwan01.github.io/blog/etc/firebase/#firestore-database-crud
const getData = async (id, password) => {
  if (firebaseConfig?.projectId) {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    if (app.name && typeof window !== 'undefined') {
      analytics = getAnalytics(app);
    }

    // Access Firebase services using shorthand notation
    firestore = getFirestore();
    const usersCollectionRef = collection(firestore, "users")

    const q = await query(
      usersCollectionRef,
      where("id", "==", id),
      where("password", "==", password)
    );
    
    const data = await getDocs(q);
    newData = data.docs.map(doc => ({ ...doc.data() }));
    //console.log(newData[0])
  }
}
//https://nextjs.org/docs/api-routes/response-helpers


async function login(id, password) {
    try{
        await getData(id, password)
        //console.log(newData)
        return newData[0];
    }catch(e){
        return null;
    }
}

export default login