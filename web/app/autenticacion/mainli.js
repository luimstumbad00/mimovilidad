import {auth} from '../firebase.js'
import '../firebase.js'
import'./signinForm.js'
import'./googleLogin.js'

onAuthStateChanged(auth, async (user) => {
    console.log(user)

})
