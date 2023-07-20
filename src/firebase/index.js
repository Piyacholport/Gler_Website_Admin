import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBPP69MP2p6FFHYqm5VtHhHOcMQo6XuNdo",
  authDomain: "gler2-wqhk.firebaseapp.com",
  projectId: "gler2-wqhk",
  storageBucket: "gler2-wqhk.appspot.com",
  messagingSenderId: "402129947349",
  appId: "1:402129947349:web:a053549bbd052824b1705c",
  measurementId: "G-6QS252KPMK"
}

const app = initializeApp(firebaseConfig)




const auth = getAuth(app)

export { auth }