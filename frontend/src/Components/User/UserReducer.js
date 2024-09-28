import { LOAD_INFO, LOGIN, LOGOUT } from "./UserActions";

const initialState = {
  user: undefined,
  users: [0],
  isOnline: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload.user,
        isOnline: true,
      };
    case LOAD_INFO:
      return {
        ...state,
        user: action.payload.user,
        users: action.payload.users || [],
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    // case LOAD_USERS:
    //   return {
    //     ...state,
    //     users: action.payload.user,
    //   };
    default:
      return state;
  }
};

export default userReducer;
