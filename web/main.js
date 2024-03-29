import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js"
import {auth} from './app/firebase.js'
import './app/firebase.js'
import './singupForm.js'

onAuthStateChanged(auth, async (user) => {
    console.log(user)

})
