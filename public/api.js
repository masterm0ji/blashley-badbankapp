import AccountData from './accountData.js';

export async function create() {
    const createAccount = document.getElementById('createAccount');
    const accountData = new AccountData(createAccount);
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

export async function registerAccount(account) {
    try {
        const response = await fetch('https://intense-castle-57913-add8cf75d51c.herokuapp.com/', { 
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:account 
        });  //insert api endpoint after fetch 
        return await response.json();
    } catch (error) {
        return {error: error.message || 'unknown error'};
    }
    
}

export async function fetchUserData() {
    const response = await fetch('https://intense-castle-57913-add8cf75d51c.herokuapp.com/');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
}

export const accountDataArray = [];

export function addAccountData(data) {
    accountDataArray.push(data);
}

export function getAllAccountData() {
    return accountDataArray;
}



