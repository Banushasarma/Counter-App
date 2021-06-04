import jwtDecode from "jwt-decode";
import httpService from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/auth";
const tokenKey = "token";

export async function login(user) {
  const { data } = await httpService.post(apiEndpoint, {
    email: user.username,
    password: user.password,
  });
  localStorage.setItem(tokenKey, data);
}
export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout(user) {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

const auth = {
  getCurrentUser,
  login,
  logout,
  loginWithJwt,
};

export default auth;
