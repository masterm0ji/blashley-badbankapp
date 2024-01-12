import {navigate, isLoggedIn} from './user.js';
import { updateHomePage, updateAllDataPage } from './ui.js';

const routes = {
    '/login': {templateId: 'login', requiresAuth: false },
    '/home': {templateId: 'home', requiresAuth: true },
    '/createAccount': {templateId: 'createAccount'},
    '/deposit': {templateId: 'deposit', },
    '/withdraw': {templateId: 'withdraw'},
    '/allData': {templateId: 'allData'},
};
export function routePath() {
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

    switch (path) {
        case '/home':
            updateHomePage();
            break;
        case '/allData':
            updateAllDataPage();
            break;
        default:
            break;
    }

} 