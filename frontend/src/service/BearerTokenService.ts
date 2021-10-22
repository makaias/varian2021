import {isValidNonEmptyString} from "../util/CommonValidators";

const LOCALSTORAGE_KEY_BEARER_TOKEN = 'BearerToken';

function setToken(token: string) {
    localStorage.setItem(LOCALSTORAGE_KEY_BEARER_TOKEN, token);
}

function deleteToken() {
    localStorage.removeItem(LOCALSTORAGE_KEY_BEARER_TOKEN);
}

function reloadPage() {
    location.reload();
}

function isTokenSet(): boolean {
    const supposedToken = localStorage.getItem(LOCALSTORAGE_KEY_BEARER_TOKEN);
    return isValidNonEmptyString(supposedToken);
}

function getToken(): string {
    if (!isTokenSet()) {
        reloadPage();
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