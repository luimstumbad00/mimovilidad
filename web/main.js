import {auth} from './app/firebase.js'
import './app/firebase.js'
import './singupForm.js'
import'./signinForm.js'

onAuthStateChanged(auth, async (user) => {
    console.log(user)

})
