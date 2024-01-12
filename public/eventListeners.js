import { login, logout, deposit, withdraw } from './user.js';

export function setupListeners() {
    const loginForm = document.getElementById('loginForm');
    const logoutButton = document.getElementById('logoutButton');
    const depositForm = document.getElementById('depositForm');
    const withdrawForm = document.getElementById('withdrawForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        login(username, password);
    });

    logoutButton.addEventListener('click', function () {
        logout();
    });

    depositForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const depositAmount = document.getElementById('depositAmount').value;
        deposit(depositAmount);
    });

    withdrawForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const withdrawAmount = document.getElementById('withdrawAmount').value;
        withdraw(withdrawAmount);
    });

    document.addEventListener('DOMContentLoaded', function () {
        updateAllDataPage();
    });
}
