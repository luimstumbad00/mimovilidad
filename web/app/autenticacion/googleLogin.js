import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js"
import { auth } from '../firebase.js'

const googleButton = document.querySelector('#google-login')

googleButton.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider()
    try {
        const credentials = await signInWithPopup(auth, provider)
        const userEmail = credentials.user.email
        sessionStorage.setItem("userCredentials", JSON.stringify(credentials));
        sessionStorage.setItem("email", userEmail);
        window.location.href = './home.html';
        alert('Bienvenido ' + userEmail + '. Pulsa aceptar para continuar.')
    } catch (error) {
        console.error('Error al iniciar sesión:', error.message);
        alert('Error al iniciar sesión: ' + error.message);
    }
})