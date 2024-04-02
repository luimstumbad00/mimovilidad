import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js"
import { auth } from '../firebase.js'


const googleButton = document.querySelector('#google-login')

googleButton.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider()
    const email = null;
    try {
        const credentials = await signInWithPopup(auth, provider)
        console.log(credentials)
        email = credentials.user.email
        sessionStorage.setItem("userCredentials", JSON.stringify(credentials));
        sessionStorage.setItem("email", email);
        window.location.href = './home.html';
        alert('Bienvenido ' + credentials.user.email + ' pulsa aceptar para continuar')

    } catch (error) {
        console.log(error)
        
    }

})