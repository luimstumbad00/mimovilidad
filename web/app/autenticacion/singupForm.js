import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js"
import { auth } from '../firebase.js'
const singupForm = document.querySelector('#signup-form')
singupForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const email = singupForm['signup-email'].value
    const password =singupForm['signup-password'].value
    console.log(email, password)
    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials)
        sessionStorage.setItem("userCredentials", JSON.stringify(userCredentials));
        sessionStorage.setItem("email", email);
        window.location.href = './home.html';
        alert('Bienvenido ' + userCredentials.user.email + ' pulsa aceptar para continuar')
    } catch (error) {
        console.log(error.message)
        console.log(error.code)
        if(error.code === 'auth/email-already-in-use'){
            alert('Ya hay una cuenta existente con este correo ')
        } else if(error.code === 'auth/weak-password'){
            alert('Oh, parece que tu contraseña es demasiado debil')
        }else{
            alert('Formato de correo no válido')
        }
    }
})