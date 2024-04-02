import {auth} from './firebase.js'
import './firebase.js'
import '../singupForm.js'
import'./autenticacion/signinForm.js'

onAuthStateChanged(auth, async (user) => {
    console.log(user)

})
