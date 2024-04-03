import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
import { auth } from '../firebase.js';

const db = getFirestore();
const googleButton = document.querySelector('#google-login');

googleButton.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider();
    try {
        const credentials = await signInWithPopup(auth, provider);
        const userEmail = credentials.user.email;
        const userUID = credentials.user.uid;

        // Verificar si es la primera vez que el usuario inicia sesión
        const userDocRef = doc(db, "user", userUID);
        const userDocSnapshot = await getDoc(userDocRef);
        
        if (!userDocSnapshot.exists()) {
            // Es la primera vez que el usuario inicia sesión, guardar fecha y booleano
            const dateString = '01/01/2021'; // Obtener la fecha actual como cadena ISO

            // Guardar datos en Firestore
            await setDoc(userDocRef, {
                FECHA: dateString,
                VEHICULO: false // Inicialmente false
            });
        }

        sessionStorage.setItem("userCredentials", JSON.stringify(credentials));
        sessionStorage.setItem("email", userEmail);
        window.location.href = './home.html';
        alert('Bienvenido ' + userEmail + '. Pulsa aceptar para continuar.');

        // Mostrar el UID en la consola
        console.log('UID del usuario: ', userUID);
    } catch (error) {
        console.error('Error al iniciar sesión:', error.message);
        alert('Error al iniciar sesión: ' + error.message);
    }
});