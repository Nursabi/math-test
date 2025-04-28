function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const userFound = savedUsers.find(user => user.username === username && user.password === password);

    if (userFound) {
        window.location.href = "data/topics.html";
    } else {
        alert("Логин немесе құпиясөз қате!");
    }
}

function register() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    if (!newUsername || !newPassword) {
        alert("Барлық жолдарды толтырыңыз!");
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username: newUsername, password: newPassword });
    localStorage.setItem('users', JSON.stringify(users));

    alert("Тіркелу сәтті өтті! Енді кіру бетіне өтіңіз.");
    window.location.href = "index.html";
}
