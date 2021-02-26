var urlConfig = {
    identityUrl:"http://localhost:7001/api"
};

const TokenKey = 'loginToken'

function getToken() {
  return localStorage.getItem(TokenKey)
}

function setToken(token) {
  return localStorage.setItem(TokenKey, token)
}

function removeToken() {
  return localStorage.removeItem(TokenKey)
}