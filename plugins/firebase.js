import firebase from 'firebase/app'
import 'firebase/firestore'
if (!firebase.apps.length) {
  const config = {
    apiKey: "AIzaSyAzEy6DqrnNLqqjLagqEnxmzYRMrJrYX8A",
    authDomain: "dezal-e34b9.firebaseapp.com",
    databaseURL: "https://dezal-e34b9.firebaseio.com",
    projectId: "dezal-e34b9",
    storageBucket: "dezal-e34b9.appspot.com",
    messagingSenderId: "1098134824316",
    appId: "1:1098134824316:web:03f74fc2d6433efa"
  }
  firebase.initializeApp(config)
  // firebase.firestore().settings({ timestampsInSnapshots: true })
}
const fireDb = firebase.firestore()
export { fireDb }