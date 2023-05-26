/*JS Login*/
const showPasswordButton = document.getElementById('show-password-button');
const passwordInput = document.getElementById('password');

showPasswordButton.addEventListener('click', function () {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    showPasswordButton.textContent = 'Ocultar';
  } else {
    passwordInput.type = 'password';
    showPasswordButton.textContent = 'Mostrar';
  }
});


/*JS registro y entrada login*/
const usuariosRegistrados = [];

function registrarUsuario() {
  const username = document.getElementById('username').value;
  const fullname = document.getElementById('fullname').value;
  const birthDay = document.getElementById('birth-day').value;
  const birthMonth = document.getElementById('birth-month').value;
  const birthYear = document.getElementById('birth-year').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const usuario = {
    username,
    fullname,
    birthdate: `${birthDay}/${birthMonth}/${birthYear}`,
    email,
    password
  };

  usuariosRegistrados.push(usuario);

  window.location.href = 'login.html';
}

function verificarInicioSesion() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const usuarioEncontrado = usuariosRegistrados.find(
    (usuario) => usuario.username === username && usuario.password === password
  );

  if (usuarioEncontrado) {
    window.location.href = 'menu.html';
  } else {
    mostrarMensajeError();
    return;
  }
}

function mostrarMensajeError() {
  const mensajeError = document.getElementById('mensaje-error');
  mensajeError.style.display = 'block';
}

document.getElementById('registration-form').addEventListener('submit', function(event) {
  event.preventDefault(); 
  registrarUsuario();
});

document.getElementById('login-button').addEventListener('click', function(event) {
  event.preventDefault(); 
  verificarInicioSesion();
});
