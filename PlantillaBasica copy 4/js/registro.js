const form = document.getElementById('registration-form');

form.addEventListener('submit', function(event) {
  const username = document.getElementById('username').value;
  const fullname = document.getElementById('fullname').value;
  const day = document.getElementById('birth-day').value;
  const month = document.getElementById('birth-month').value;
  const year = document.getElementById('birth-year').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const user = {
    username: username,
    fullname: fullname,
    birthdate: `${day}/${month}/${year}`,
    email: email,
    password: password
  };

  let users = [];
  const existingUsers = localStorage.getItem('users');

  if (existingUsers) {
    users = JSON.parse(existingUsers);
  }

  users.push(user);

  localStorage.setItem('users', JSON.stringify(users));

  form.reset();

  alert('Registro exitoso. Los datos han sido guardados. puse el boton de volver al login');

  window.location.href = "../login.html";

  return false; 
});

function updateUsersList() {
  const userListContainer = document.getElementById('user-list');
  const users = JSON.parse(localStorage.getItem('users'));
  let userListHTML = '';

  if (users) {
    users.forEach(function(user) {
      userListHTML += `<li>${user.username}</li>`;
    });
  }

  userListContainer.innerHTML = userListHTML;
}
