import jwtDecode from "jwt-decode";
import { api } from "./api";

const USER_KEY = "@user";

export const signIn = (user) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));

  //setando o token como padrão em todas as requisições
  api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
};

export const signOut = () => {
  localStorage.removeItem(USER_KEY);

  api.defaults.headers.common["Authorization"] = undefined;
};

export const getUser = () => {
  const { user } = JSON.parse(localStorage.getItem(USER_KEY));

  return user;
};

export const setUser = (user) => {
  const userLocal = JSON.parse(localStorage.getItem(USER_KEY));

  userLocal.user = user;

  localStorage.setItem(USER_KEY, JSON.stringify(userLocal));
};

export const isSignedIn = () => {
  //recupero o user do localStorage
  const user = JSON.parse(localStorage.getItem(USER_KEY));

  //verifico se user existe e se existe um token
  if (user && user.token) {
    //decodifico o token
    const jwtDecoded = jwtDecode(user.token);

    //pega a hora atual do sistema e converte em segundos
    const nowTime = (Date.now() / 1000) | 0;

    //verifica se a data de expiração do token é menor que a data atual
    if (jwtDecoded.exp < nowTime) {
      //se for menor, faz logout
      return signOut();
    }

    //seta o token nas próximas requisições
    api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
    return true;
  }

  return false;
};
