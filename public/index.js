const routes = {
    '/login': {templateId: 'login', requiresAuth: false },
    '/home': {templateId: 'home', requiresAuth: true },
    '/createAccount': {templateId: 'createAccount'},
    '/deposit': {templateId: 'deposit', },
    '/withdraw': {templateId: 'withdraw'},
    '/allData': {templateId: 'allData'},
};
function routePath() {
    const path = window.location.pathname;
    const route = routes[path];

    if (!route) {
        return navigate ('/login');
    }

    if (route.requiresAuth && !isLoggedIn()) {
        return navigate('/login');
    }

    const template = document.getElementById(route.templateId);
    const view = template.content.cloneNode(true);
    const bank = document.getElementById('bank');
    bank.innerHTML = '';
    bank.appendChild(view);

    if (path === '/home') {
        updateHomePage();
    }
}  

function isLoggedIn() {
    return localStorage.getItem('userToken') !== null;
}

function login(username, password){
    localStorage.setItem('userToken', 'dummyToken');
    routePath();
}

function logout() {
    localStorage.removeItem('userToken');
    navigate('/login');
}

function navigate(path) {
    window.history.pushState({}, path, path);
    routePath();
}

function onLinkClick(event) {
    event.preventDefault();
    navigate(event.target.href);
}

async function create() {
    const createAccount = document.getElementById('createAccount');
    const accountData = new accountData(createAccount);
    const data = Object.fromEntries(accountData);
    const jsonData = JSON.stringify(data);
    const result = await registerAccount(jsonData);

    if (result.error) {
        return console.log('An error occured:', result.error);
    }

    addAccountData(data);

    console.log('New Account Created', result);

    updateAllDataPage();
}

async function registerAccount(account) {
    try {
        const response = await fetch('', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:account 
        });  //insert api url AWS S3
        return await response.json();
    } catch (error) {
        return {error: error.message || 'unknown error'};
    }
    
}

async function fetchUserData() {
    // insert API call
}

const accountDataArray = [];

function addAccountData(data) {
    accountDataArray.push(data);
}

function getAllAccountData() {
    return accountDataArray;
}

function updateAllDataPage() {
    const allDataTemplate = document.getElementById('allData');
    const view = allDataTemplate.content.cloneNode(true);
    const allDataContainer = document.getElementById('allDataContainer');
    allDataContainer.innerHTML = '';

    const allAccountData = getAllAccountData();
    
    const table = document.createElement('table');
    table.innerHTML = `
        <thead>
            <tr>
                <th>Email</th>
                <th>Name</th>
                <th>Password</th>
            </tr>
        </thead>
        <tbody></tbody>
    `;

    const tbody = table.querySelector('tbody');

    allAccountData.forEach((accountData)=> {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${accountData.email}</td>
            <td>${accountData.username}</td>
            <td>${accountData.password}</td>
        `;
        tbody.appendChild(row);
    });

    allDataContainer.appendChild(table);
}

updateAllDataPage();

async function updateHomePage() {
    const userData = await fetchUserData();

    document.getElementById("username").textContent = userData.username;
    document.getElementById("balanceAmount").textContent = userData.balance.toFixed(2);
    
    const transactionTable = document.getElementById("transacionTable");
    transactionTable.innerHTML = "";
    userData.transactions.forEach((transaction) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${transaction.date}</td>
            <td>${transaction.description}</td>
            <td>${transaction.category}</td>
            <td>${transaction.amount.toFixed(2)}</td>
        `;
        transactionTable.appendChild(row);
    });
}

updateHomePage();

function deposit (amount) {
    let currentBalance = parseFloat(document.getElementById('balance').value) || 0;
    const depositAmount = parseFloat(amount) || 0;
    currentBalance += depositAmount;
    document.getElementById('balance').value = currentBalance.toFixed(2);

    updateWithdrawalForm();
}

async function updateWithdrawalForm() {
    const userData = await fetchUserData();
    document.getElementById("balance").value = userData.balance.toFixed(2);
}


async function withdraw (amount) {
    let currentBalance = parseFloat(document.getElementById('balance').value) || 0;
    const withdrawalAmount = parseFloat(amount) || 0;

    if (withdrawalAmount > currentBalance) {
        alert("Insufficient funds!");
        return;
    }

    currentBalance -= withdrawalAmount;
    document.getElementById('balance').value = currentBalance.toFixed(2);

    updateWithdrawalForm();
}

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value; 
    const password = document.getElementById('password').value;
    login (username, password);  
});

document.getElementById('logoutButton').addEventListener('click', function () {
    logout();
});

document.getElementById('depositForm').addEventListener('submit', function (event) {
   event.preventDefault(); 
   const depositAmount = document.getElementById('depositAmount').value;
   deposit(depositAmount);
});

document.getElementById('withdrawForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const withdrawalAmount = document.getElementById('withdrawAmount').value;
    withdraw(withdrawalAmount);
});

updateWithdrawalForm();
window.onpopstate = () => {
    updateWithdrawalForm();
    updateRoute();
};

routePath();

window.onpopstate = () => updateRoute();


