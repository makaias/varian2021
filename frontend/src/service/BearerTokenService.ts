import {isValidNonEmptyString} from '../util/CommonValidators';

const LOCALSTORAGE_KEY_BEARER_TOKEN = 'BearerToken';

function reloadPage() {
  //TODO: This can put the page into a reload loop. Not super important stuff, might fix later.
  //location.reload();
}

function setToken(token: string) {
  localStorage.setItem(LOCALSTORAGE_KEY_BEARER_TOKEN, token);
}

function deleteToken() {
  localStorage.removeItem(LOCALSTORAGE_KEY_BEARER_TOKEN);
}

function getToken(): string | false {
  const supposedToken = localStorage.getItem(LOCALSTORAGE_KEY_BEARER_TOKEN) as string;
  if (isValidNonEmptyString(supposedToken)) {
    return supposedToken;
  }
  return false;
}

function isTokenSet(): boolean {
  return !!getToken();
}

function getTokenOrReload(): string {
  if (!isTokenSet()) {
    reloadPage();
  }
  return getToken() as string;
}

const BearerTokenService = {
  isTokenSet,
  setToken,
  getToken: getTokenOrReload,
  deleteToken
};

export default BearerTokenService;