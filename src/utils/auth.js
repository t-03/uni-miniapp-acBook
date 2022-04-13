import Cookies from "js-cookie";

const Token = "_token";
/**
 * 获取TOKEN
 * @returns {*}
 */
export function getToken () {
  return Cookies.get(Token);
}

/**
 * 设置TOKEN
 * @param token {String}
 * @returns {*}
 */
export function setToken (token) {
  return Cookies.set(Token, token);
}

/**
 * 移除TOKEN
 * @returns {*}
 */
export function removeToken () {
  return Cookies.remove(Token);
}