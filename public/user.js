import { routePath } from "./routing.js";

export function isLoggedIn() {
    return localStorage.getItem('userToken') !== null;
}

export function login(username, password){
    localStorage.setItem('userToken', 'dummyToken');
    routePath();
}

export function logout() {
    localStorage.removeItem('userToken');
    navigate('/login');
}

export function navigate(path) {
    window.history.pushState({}, path, path);
    routePath();
}