import {auth} from './app/firebase.js'
import './app/firebase.js'
import './singupForm.js'

onAuthStateChanged(auth, async (user) => {
    console.log(user)

})
