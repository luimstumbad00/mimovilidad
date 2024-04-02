import {auth} from './app/firebase.js'
import './app/firebase.js'
import'./signinForm.js'
import'./googleLogin.js'

onAuthStateChanged(auth, async (user) => {
    console.log(user)

})
