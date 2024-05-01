//header
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})
//header


//SCROOLL A ID
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
//SCROOLL A ID


//OJO DE VER Y DESVER
function togglePassword() {
    var passwordInput = document.getElementById("password");
    var toggleBtn = document.querySelector(".toggle-password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleBtn.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
        passwordInput.type = "password";
        toggleBtn.innerHTML = '<i class="fas fa-eye"></i>';
    }
}
//OJO DE VER Y DESVER


//MODULOS ALUMNOS
function scrollToModule(moduleId) {
    var module = document.getElementById(moduleId);
    module.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
//MODULOS ALUMNOS

//USUARIOS (INICIAR SESION)
document.addEventListener("DOMContentLoaded", function() {
    function togglePassword() {
        var x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
    
    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe
    
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
    
        // Hacer una solicitud para obtener el archivo JSON (puedes usar fetch o XMLHttpRequest)
        fetch('usuarios.json')
            .then(response => response.json())
            .then(data => {
                // Verificar las credenciales
                var usuarioEncontrado = data.usuarios.find(function(usuario) {
                    return usuario.username === username && usuario.password === password;
                });
    
                if (usuarioEncontrado) {
                    // Redirigir al usuario a la página correspondiente
                    window.location.href = usuarioEncontrado.pagina;
                } else {
                    alert("Usuario o contraseña incorrectos");
                }
            })
            .catch(error => console.error('Error:', error));
    });
});
//USUARIOS (INICIAR SESION)
