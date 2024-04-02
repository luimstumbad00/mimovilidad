import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js"
import { auth } from '../firebase.js'

const googleButton = document.querySelector('#google-login')

googleButton.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider()
    try {
        const credentials = await signInWithPopup(auth, provider)
        const userEmail = credentials.user.email
        const userUID = credentials.user.uid // Obtener el UID del usuario
        sessionStorage.setItem("userCredentials", JSON.stringify(credentials));
        sessionStorage.setItem("email", userEmail);
        window.location.href = './home.html';
        alert('Bienvenido ' + userEmail + '. Pulsa aceptar para continuar.' + 'UID del usuario:' + userUID)
        
        // Mostrar el UID en la consola
        console.log('UID del usuario:', userUID);
    } catch (error) {
        console.error('Error al iniciar sesión:', error.message);
        alert('Error al iniciar sesión: ' + error.message);
    }
})
