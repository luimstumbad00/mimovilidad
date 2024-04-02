const logoutButton = document.getElementById("logoutButton");

// Agregar un evento de clic al botón
logoutButton.addEventListener("click", function() {
    // Invalidar la sesión al eliminar todos los datos almacenados en sessionStorage
    sessionStorage.clear();
    
    // Mostrar un mensaje de alerta indicando que la sesión ha sido cerrada
    alert("La sesión ha sido cerrada.");
    
    // Redirigir al usuario a la página de inicio de sesión o cualquier otra página
    window.location.href = "login.html";
});