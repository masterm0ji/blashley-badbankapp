import { getAllAccountData } from '../api.js'
import { fetchUserData } from '../api.js';

export function updateAllDataPage() {
    const template = document.getElementById('allData');
    const clone = template.content.cloneNode(true);
    const allDataContainer = clone.querySelector('#allDataContainer');
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

    document.querySelector('#allDataContainer').appendChild(clone);
}

export async function updateHomePage() {
    const userData = await fetchUserData();

    document.getElementById("username").textContent = userData.username;
    document.getElementById("balanceAmount").textContent = userData.balance.toFixed(2);
    
    const transactionTable = document.getElementById("transactionTable");
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

export function deposit (amount) {
    let currentBalance = parseFloat(document.getElementById('balance').value) || 0;
    const depositAmount = parseFloat(amount) || 0;
    currentBalance += depositAmount;
    document.getElementById('balance').value = currentBalance.toFixed(2);

    updateWithdrawForm();
}

export async function updateWithdrawForm() {
    const userData = await fetchUserData();
    document.getElementById("balance").value = userData.balance.toFixed(2);
}


export async function withdraw (amount) {
    let currentBalance = parseFloat(document.getElementById('balance').value) || 0;
    const withdrawAmount = parseFloat(amount) || 0;

    if (withdrawAmount > currentBalance) {
        alert("Insufficient funds!");
        return;
    }

    currentBalance -= withdrawAmount;
    document.getElementById('balance').value = currentBalance.toFixed(2);

    updateWithdrawForm();
}