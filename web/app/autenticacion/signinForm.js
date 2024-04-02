import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js"
import { auth } from '../firebase.js'


const singupForm = document.querySelector('#login-form');

singupForm.addEventListener('submit', async e => {
    e.preventDefault()
    const email = singupForm['login-email'].value;
    const password = singupForm['login-password'].value;
    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(credentials)
        sessionStorage.setItem("userCredentials", JSON.stringify(credentials));
        sessionStorage.setItem("email", email);
        window.location.href = './home.html';
        alert('Bienvenido ' + credentials.user.email + ' pulsa aceptar para continuar')
    } catch (error) {
        alert('Credenciales invalidas, comprueba tus campos o intentalo mas tarde')
    }
})