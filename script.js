document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Validación simple
    if (username === 'usuario' && password === 'contraseña') {
        errorMessage.style.display = 'none';
        alert('Inicio de sesión exitoso');
        // Aquí puedes redirigir al usuario a otra página
        // window.location.href = 'dashboard.html';
    } else {
        errorMessage.textContent = 'Usuario o contraseña incorrectos';
        errorMessage.style.display = 'block';
    }
});