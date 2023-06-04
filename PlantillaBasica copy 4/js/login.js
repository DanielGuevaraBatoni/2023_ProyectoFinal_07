/* JS Login */
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

document.getElementById("login-button").addEventListener("click", function() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var users = JSON.parse(localStorage.getItem('users')); 

  var userExists = false;

  for (var i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      userExists = true;
      break;
    }
  }

  if (userExists) {
    window.location.href = "menu.html"; 
} else {
    alert("Contraseña o usuario incorrecto"); 
  }
});


