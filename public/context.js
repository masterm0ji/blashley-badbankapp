import { routePath} from './routing.js';
import { isLoggedIn, login, logout, navigate } from './user.js';
import { create, registerAccount, fetchUserData, addAccountData, getAllAccountData } from '../api.js';
import { updateAllDataPage, updateHomePage, deposit, updateWithdrawForm, withdraw } from './ui.js';
import AccountData from '../accountData.js';

function onLinkClick(event) {
    event.preventDefault();
    const href = event.target.getAttribute('href');
    navigate(href);
}
updateHomePage();

window.onload = function() {
    updateAllDataPage();
};

window.onpopstate = () => {
    updateWithdrawForm();
    updateRoute();
};

routePath();

export { onLinkClick };

window.onLinkClick = onLinkClick;