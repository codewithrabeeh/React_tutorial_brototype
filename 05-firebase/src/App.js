import './App.css'
import db from './firebase/config'
import auth from './firebase/config'
import { firebaseApp } from './firebase/config'

function App() {

  // async function getreq(){
  //   db.collection('products').get().then(snapshot => {
  //     snapshot.forEach((obj) => {
  //         console.log(obj.data(), obj.id)
  //     })
  //   })
  // }

  async function getreq(){
    db.collection('products').add({
      name: 'Vivo',
      price: 1500,
    }).catch((error) => {console.log('Error Occured', error)})
  }

  // async function getreq(){
  //   db.collection('products').doc('PK2WHwVtI2Zssrwqmyw1').delete().then(() => {console.log('deleted')})
  // }

  // async function getreq(){
  //   db.collection('products').doc('V9FJxdBoHo7S82nWHU9X').set({
  //     name: 'updated to micromax'
  //   })
  // }

  // async function getreq(){
  //   firebaseApp.auth().createUserWithEmailAndPassword('ray@gmail.com', 'ray123') 
  //   .then((userCredential) => {
  //     var user = userCredential.user;
  //     console.log(user)
  //   })
  // }


  return (
    <div> 
      <h1>Hello</h1>
      <button onClick={getreq}>Click Me</button> 
    </div>
    )
}




export default App;
