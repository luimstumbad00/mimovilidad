import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js"
import { auth } from './app/firebase.js'


const googleButton = document.querySelector('#google-login')

googleButton.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider()

    try {
        const credentials = await signInWithPopup(auth, provider)
        console.log(credentials)
        sessionStorage.setItem("credentials", JSON.stringify(credentials));
    window.location.href = './index.html';
    alert('Bienvenido ' + credentials.user.email + ' pulsa aceptar para continuar')

    } catch (error) {
        console.log(error)
        
    }

})