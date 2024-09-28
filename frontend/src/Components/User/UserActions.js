export const LOGIN = "LOGIN";
export const LOAD_INFO = "LOAD_INFO";
export const LOGOUT = "LOGOUT";
// export const LOAD_USERS = "LOAD_USERS";

export const doLoginActions = (payload) => {
  return {
    type: LOGIN,
    payload,
  };
};
export const loadInfoActions = (payload) => {
  return {
    type: LOAD_INFO,
    payload,
  };
};

export const doLogoutAction = () => {
  return {
    type: LOGOUT,
  };
};

// export const loadUsers = (payload) => {
//   return {
//     type: LOAD_USERS,
//     payload,
//   };
// };
