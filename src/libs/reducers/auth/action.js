import actionType from "./type";

export function login(username, password) {
  return {
    type: actionType.LOGIN,
    payload: {
      username: username,
      password: password,
    },
  };
}

export const logout = {
  type: actionType.LOGOUT,
};
