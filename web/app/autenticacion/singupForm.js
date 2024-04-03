import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
import { auth } from '../firebase.js';

const db = getFirestore();
const singupForm = document.querySelector('#signup-form');

singupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = singupForm['signup-email'].value;
    const password = singupForm['signup-password'].value;
    console.log(email, password);

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredentials);
        sessionStorage.setItem("userCredentials", JSON.stringify(userCredentials));
        sessionStorage.setItem("email", email);
        
        // Obtener el UID del usuario dentro del bloque try
        const userUID = userCredentials.user.uid;

        const dateString = '01/01/2021';

        // Guardar datos en Firestore
        const userDocRef = doc(db, "user", userUID); // "user" es el nombre de la colección
        await setDoc(userDocRef, {
            FECHA: dateString, // Ejemplo de guardar la fecha actual
            VEHICULO: false // Ejemplo de guardar un booleano
        });

        // Redirigir al usuario a la página de inicio
        window.location.href = './home.html';
        alert('Bienvenido ' + userCredentials.user.email + '. Pulsa aceptar para continuar. UID del usuario: ' + userUID);
    }catch (error) {
        console.log(error.message)
        console.log(error.code)
        if(error.code === 'auth/email-already-in-use'){
            alert('Ya hay una cuenta existente con este correo ')
        } else if(error.code === 'auth/weak-password'){
            alert('Oh, parece que tu contraseña es demasiado debil')
        }else{

         // Guardar datos en Firestore
         const userDocRef = doc(db, "user", userUID); // "user" es el nombre de la colección
         await setDoc(userDocRef, {
             FECHA: dateString, // Ejemplo de guardar la fecha actual
             VEHICULO: false // Ejemplo de guardar un booleano
         });

            alert('Tu cuenta ha sido creada, serás redirigido al incio de sesion')
            window.location.href = './login.html';

        


        }
    }
})