import './App.css';

/* Config Firebase */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBDIjm7GKIGgJwgQBa9CR-Oz334mxPzkqU",
  authDomain: "fir-7f478.firebaseapp.com",
  projectId: "fir-7f478",
  storageBucket: "fir-7f478.appspot.com",
  messagingSenderId: "993363148213",
  appId: "1:993363148213:web:359ee8a5d29fef4dfe6dfc",
  measurementId: "G-7Y0G2DZE7Q"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

async function whenClick(){
  
  // To Get Documents from Collection 
 /* const ref = collection(db, 'products')
  const docs = await getDocs(ref) 
  docs.forEach(doc => {
    console.log(doc.data())
  }) */

  // To Get a Document
  /* const ref = doc(db, 'products', 'BhDhqKCE4abpqY0MvmMH')
  const docs = await getDoc(ref) 
  console.log(docs.data()) */
  
  // To Add Doc
  /* const ref = collection(db, 'products')
  addDoc(ref, {name: 'HTC', price: 343, type: 'mobile'}) */
  
  // To Delete Doc
  /* const ref = doc(db, 'products', 'bNGjfk1IVA6emJEj2x7y')
  deleteDoc(ref) */

  // To Update Doc
 /*  const ref = doc(db, 'products', 'BhDhqKCE4abpqY0MvmMH')
  const data = {
    price: 321
  }
  updateDoc(ref, data).then(() => console.log('Successfull')) */
}

function App() {
  
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={whenClick}>hello</button>
    </div>
  );
}

export default App;
