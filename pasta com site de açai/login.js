document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  if (user === 'admin' && pass === '1234') {
    alert('Login OK');
  } else {
    alert('Login inválido');
  }
});
