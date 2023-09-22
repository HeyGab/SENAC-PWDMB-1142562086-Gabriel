// Simulando um banco de dados de usuários
const usersDatabase = [
    { username: 'usuario1', password: 'senha' },
    { username: 'usuario2', password: 'senha' }
];

const loginForm = document.getElementById('login-form');
const loginMessage = document.getElementById('login-message');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    // Verificar se o usuário e senha correspondem a um registro no banco de dados
    const user = usersDatabase.find(user => user.username === usernameInput && user.password === passwordInput);

    if (user) {
        // Login bem-sucedido
        loginMessage.innerHTML = 'Login bem-sucedido! Redirecionando para a página inicial...';
        setTimeout(function() {
            window.location.href = 'index.html';
        }, 2000); // Redireciona após 2 segundos (simulando)
    } else {
        // Login falhou
        loginMessage.innerHTML = 'Login falhou. Verifique suas credenciais.';
    }
});
