import { onLinkClick } from './context.js';
import { routePath } from './routing.js';
import { isLoggedIn, login, logout, navigate } from './user.js';
import { create, registerAccount, fetchUserData, addAccountData, getAllAccountData } from '../api.js';
import { updateAllDataPage, updateHomePage, deposit, updateWithdrawForm, withdraw } from './ui.js';
import AccountData from '../accountData.js';

document.addEventListener('click', function (event){
    if (event.target.tagName == 'A') {
        event.preventDefault();
        onLinkClick(event);
    }
});
routePath();