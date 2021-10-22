import {isValidNonEmptyString} from "../util/CommonValidators";

const LOCALSTORAGE_KEY_BEARER_TOKEN = 'BearerToken';

async function setToken(token: string) {
    localStorage.setItem(LOCALSTORAGE_KEY_BEARER_TOKEN, token);
}

async function deleteToken() {
    localStorage.removeItem(LOCALSTORAGE_KEY_BEARER_TOKEN);
}

export function redirectToLogin() {
    location.replace('/login');
}

export function isTokenSet(): boolean {
    const supposedToken = localStorage.getItem(LOCALSTORAGE_KEY_BEARER_TOKEN);
    return isValidNonEmptyString(supposedToken);
}

function getToken(): string {
    if (!isTokenSet()) {
        redirectToLogin();
    }
    return localStorage.getItem(LOCALSTORAGE_KEY_BEARER_TOKEN) as string;
}

const BearerTokenService = {
    isTokenSet,
    setToken,
    getToken,
    deleteToken,
};

export default BearerTokenService;